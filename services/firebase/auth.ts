// Import the functions you need from the SDKs you need
import { FirebaseError, getApps, initializeApp } from "firebase/app";
import { connectAuthEmulator, createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithCustomToken, signInWithEmailAndPassword, signInWithRedirect, signOut as firebaseSignOut, User } from "firebase/auth";
import { produce } from 'immer';
import jwtDecode from "jwt-decode";
import { useRouter } from "next/router";
import { useEffect } from "react";
import create from "zustand";
import { addAuthorizationHeader } from "../../graphql/FetchRequester";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
};

// Initialize Firebase
if (getApps().length === 0) {
	initializeApp(firebaseConfig);
}

const auth = getAuth();
if (process.env.NEXT_PUBLIC_FIREBASE_EMULATOR) {
	connectAuthEmulator(auth, `${process.env.NEXT_PUBLIC_FIREBASE_EMULATOR}`, { disableWarnings: true });
}

export enum SubscriptionStatus {
	Trial,
	Active,
	Inactive,
	None,
}

export enum AuthState {
	LoggedOut,
	LoggingIn,
	LoggedIn,
	Unknown
}

interface AuthStore {
	user: User | null | undefined;
	userId: string | null | undefined;
	setUser: (user: User | null, userId: string | null) => void;
	state: AuthState;
	setState: (state: AuthState) => void;
	subscription: SubscriptionStatus | undefined;
	setSubscriptionStatus: (status: SubscriptionStatus) => void;
	impersonating: boolean;
	setImpersonating: (impersonating: boolean) => void;
	role: string | null | undefined;
	setRole: (role: string | null) => void;
}

const useAuthStore = create<AuthStore>(set => ({
	user: undefined,
	userId: undefined,
	setUser: (u, uid) => set(produce<AuthStore>(draft => {
		if (u === null) {
			draft.state = AuthState.LoggedOut;
		}
		else {
			draft.state = AuthState.LoggedIn;
		}
		draft.user = u;
		draft.userId = uid;
	})),
	state: AuthState.Unknown,
	setState: (s => set(produce<AuthStore>(draft => {
		draft.state = s;
	}))),
	subscription: undefined,
	setSubscriptionStatus: (s => set(produce<AuthStore>(draft => {
		draft.subscription = s;
	}))),
	impersonating: false,
	setImpersonating: (i => set(produce<AuthStore>(draft => {
		draft.impersonating = i;
	}))),
	role: undefined,
	setRole: (r => set(produce<AuthStore>(draft => {
		draft.role = r;
	})))
}));

let loggedIn = false;
export function useAuthProvider() {
	const { setUser, userId, setSubscriptionStatus, setImpersonating, setRole } = useAuthStore();
	useEffect(() => {
		onAuthStateChanged(auth, async (user) => {

			if (user) {
				const newLogin = !loggedIn;
				loggedIn = true;
				if (newLogin) {
					try {
						const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/loggedIn`, {
							method: "POST",
							headers: await addAuthorizationHeader({
								'Content-Type': 'application/json',
							}),
						});
						const json = await response.json()
						if (!json.tokenValid) {
							await getAuth().currentUser?.getIdToken(true);
						}
						setSubscriptionStatus(json.subscriptionStatus);
						setUser(user, json.userId);
					}
					catch {
						setUser(null, null);
						loggedIn = false;
					}
				}
				else {
					setUser(user, userId ?? null);
				}
				const jwt = await user.getIdToken();
				const token = jwtDecode<{ impersonatedBy?: string | null, "https://hasura.io/jwt/claims"?: { "x-hasura-allowed-roles"?: string[] } }>(jwt);
				setImpersonating(!!token.impersonatedBy);
				const roles = (token["https://hasura.io/jwt/claims"]?.["x-hasura-allowed-roles"] ?? ["user"]).filter(r => r !== "user");
				if (roles.length > 0) {
					setRole(roles[0]);
				}
				else {
					setRole('user');
				}
			} else {
				setUser(null, null);
				loggedIn = false;
			}
		});
	}, [setUser]);
}

const googleAuthProvider = new GoogleAuthProvider();

function signInWithGoogle() {
	signInWithRedirect(auth, googleAuthProvider);
}

const githubAuthProvider = new GithubAuthProvider();

function signInWithGithub() {
	signInWithRedirect(auth, githubAuthProvider);
}

function signInWithPassword(email: string, password: string) {
	return signInWithEmailAndPassword(auth, email, password);
}

function signOut() {
	return firebaseSignOut(auth);
}

async function resetPassword(email: string) {
	try {
		return await sendPasswordResetEmail(auth, email)
	}
	catch (error) {
		const firebaseError = error as FirebaseError;
		if (firebaseError.code === 'auth/user-not-found') {
			throw "Invalid email address";
		}
		throw (error as FirebaseError).message;
	}
}

async function impersonate(userId: string) {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/impersonate`, {
		method: "POST",
		headers: await addAuthorizationHeader({
			'Content-Type': 'application/json',
		}),
		body: JSON.stringify({
			impersonateUserId: userId
		})
	});
	const { token } = await response.json();
	await signInWithCustomToken(auth, token);
	location.reload();
}

async function endImpersonation() {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/impersonate`, {
		method: "DELETE",
		headers: await addAuthorizationHeader({
			'Content-Type': 'application/json',
		})
	});
	const { token } = await response.json();
	await signInWithCustomToken(auth, token);
	location.reload();
}

function createCredentials(email: string, password: string) {
	return createUserWithEmailAndPassword(auth, email, password);
}

export function useAuth() {
	const authStore = useAuthStore();
	return {
		userId: authStore.userId,
		subscription: authStore.subscription,
		role: authStore.role,
		impersonating: authStore.impersonating,
		setSubscription: authStore.setSubscriptionStatus,
		signOut: () => {
			authStore.setState(AuthState.LoggedOut);
			signOut();
		},
		signInWithGoogle: () => {
			authStore.setState(AuthState.LoggingIn);
			signInWithGoogle()
		},
		signInWithGithub: () => {
			authStore.setState(AuthState.LoggingIn);
			signInWithGithub();
		},
		signInWithPassword: async (email: string, password: string) => {
			authStore.setState(AuthState.LoggingIn);
			try {
				await signInWithPassword(email, password);
			}
			catch (error) {
				console.error(error);
				authStore.setState(AuthState.LoggedOut);
			}
		},
		createUser: async (email: string, password: string) => {
			authStore.setState(AuthState.LoggingIn);
			try {
				await createCredentials(email, password);
			}
			catch (error) {
				authStore.setState(AuthState.LoggedOut);
				const firebaseError = error as FirebaseError;
				if (firebaseError.code === 'auth/invalid-email') {
					throw "Invalid email address.";
				}
				else if (firebaseError.code === 'auth/weak-password') {
					throw "Invalid password. Password should be at least 6 characters"
				}
				throw (error as FirebaseError).message;
			}
		},
		state: authStore.state,
		resetPassword,
		impersonate: impersonate,
		endImpersonation: endImpersonation
	}
}

export function useRequireRole(requiredRole: 'admin' | 'user', redirect: string) {
	const { role } = useAuth();
	const router = useRouter();
	useEffect(() => {
		if (role && role !== requiredRole) {
			router.push(redirect)
		}
	}, [role, router]);
}