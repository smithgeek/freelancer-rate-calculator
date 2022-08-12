import { useState } from "react";
import { AuthState, useAuth } from "../../services/firebase/auth";
import { LeftIcon } from "../Icons/LeftIcon";

type AuthProviders = 'Google' | 'Github' | 'Password';

interface LoginProps {
	providers: AuthProviders[];
}

export default function Login({ providers }: LoginProps) {
	const userAuth = useAuth();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [view, setView] = useState<'login' | 'reset' | 'signup' | 'resetSent'>('login');
	const [error, setError] = useState(null);

	const usesPaswordProvider = providers.includes('Password');
	const oAuthProviders = providers.filter(p => p !== "Password");

	const loggingIn = userAuth.state === AuthState.LoggingIn;

	const submitCredentials = async () => {
		setError(null);
		try {
			if (view === 'login') {
				userAuth.signInWithPassword(email, password);
			}
			else if (view === 'reset') {
				await userAuth.resetPassword(email);
				setView('resetSent')
			}
			else if (view === 'signup') {
				await userAuth.createUser(email, password);
			}
		}
		catch (error: any) {
			setError(error)
		}
	}

	let action = 'Sign In';
	if (view === 'reset') {
		action = 'Reset Password'
	}
	else if (view === 'signup') {
		action = 'Signup'
	}

	return (
		<div className="bg-blue-grey-900 h-screen flex flex-col justify-center">
			{(userAuth.state === AuthState.LoggedOut || userAuth.state === AuthState.LoggingIn) && <div className="container mx-auto px-4">
				<div className="flex content-center items-center justify-center h-full">
					<div className="w-full lg:w-4/12 px-4">
						<div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0 bg-blue-900">
							<div className="rounded-t mb-0 px-6 py-6">
								{view !== 'login' && <button onClick={() => setView('login')} className="flex items-center gap-1"><LeftIcon className="w-5" />Back</button>}
								<div className="text-center mb-3 flex flex-col justify-center">
									{/* <img alt="Pub Menu" src="/assets/img/logo-white.svg" className="h-12 mb-8" /> */}
									{view === "login" && <h6 className="text-blueGray-500 text-sm font-bold">
										Sign in {oAuthProviders.length > 0 ? "with" : ""}
									</h6>}
								</div>
								{view === 'resetSent' && <div className="m-8">
									Check your email for instructions on resetting your password.
								</div>}
								{view === "login" && <>
									<div className="btn-wrapper text-center flex justify-around">
										{providers.includes('Github') && <button
											className="inline-flex items-center btn btn-primary bg-white hover:bg-gray-200"
											style={{ color: 'black' }}
											type="button"
											onClick={userAuth.signInWithGithub}
										>
											<img
												alt="Sign in with github"
												className="w-5 mr-1"
												src="/assets/img/github.svg"
											/>
											Github
										</button>}
										{providers.includes('Google') && <button
											className="inline-flex items-center btn bg-white hover:bg-gray-200"
											style={{ color: 'black' }}
											type="button"
											onClick={userAuth.signInWithGoogle}
										>
											<img
												alt="Sign in with google"
												className="w-5 mr-1"
												src="/assets/img/google.svg"
											/>
											Google
										</button>}
									</div>
									{usesPaswordProvider && oAuthProviders.length > 0 && <hr className="mt-6 border-b-1 border-blueGray-300" />}
								</>}
							</div>
							{usesPaswordProvider && view !== 'resetSent' && <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
								{oAuthProviders.length > 0 && view === 'login' && <div className="text-blueGray-400 text-center mb-3 font-bold">
									<small>Or sign in with email and password</small>
								</div>}
								<form onSubmit={(e) => { e.preventDefault(); submitCredentials() }}>
									<div className="relative w-full mb-3">
										<label
											className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
											htmlFor="grid-password"
										>
											Email
										</label>
										<input
											type="email"
											className="border-0 px-3 py-3 placeholder-blueGray-300 text-black bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
											placeholder="Email"
											value={email}
											onChange={e => setEmail(e.target.value)}
										/>
									</div>

									{view !== 'reset' && <div className="relative w-full mb-3">
										<label
											className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
											htmlFor="grid-password"
										>
											Password
										</label>
										<input
											type="password"
											className="border-0 px-3 py-3 placeholder-blueGray-300 text-black bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
											placeholder="Password"
											value={password}
											onChange={e => setPassword(e.target.value)}
										/>
									</div>}

									{error && <div className="text-red-400 font-bold">{error}</div>}
									<div className="text-center mt-6">
										<button
											className={`w-full btn ${loggingIn ? "loading btn-disabled" : ""}`}
											type="submit"
										>
											{action}
										</button>
									</div>
								</form>
							</div>}
						</div>
						{usesPaswordProvider && view === 'login' && <div className="flex flex-wrap mt-6 relative">
							<div className="w-1/2">
								<button
									onClick={() => setView('reset')}
									className="text-white btn btn-link"
								>
									<small>Forgot password?</small>
								</button>
							</div>
							<div className="w-1/2 text-right">
								<button
									onClick={() => setView('signup')}
									className="text-white btn btn-link"
								>
									<small>Create new account</small>
								</button>
							</div>
						</div>}
					</div>
				</div>
			</div>}
		</div>
	);
}