import { getAuth } from "firebase/auth";
import jwt from 'jsonwebtoken';
import jwtDecode from "jwt-decode";

function getLocallySignedToken(token: string, secret: string) {
	return jwt.sign(jwtDecode(token), secret);
}

export async function getUserToken() {
	const user = getAuth().currentUser;
	if (user) {
		const idToken = await user.getIdToken();
		if (process.env.NEXT_PUBLIC_FIREBASE_EMULATOR && process.env.NEXT_PUBLIC_JWT_KEY) {
			return getLocallySignedToken(idToken, process.env.NEXT_PUBLIC_JWT_KEY);
		}
		return idToken;
	}
	return null;
}
