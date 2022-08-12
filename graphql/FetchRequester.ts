import { getUserToken } from "../services/getUserToken";

export async function addAuthorizationHeader(headers: { [key: string]: string }) {
	const token = await getUserToken();
	if (token) {
		headers['Authorization'] = `Bearer ${token}`;
	}
	return headers;
}

export const fetchRequester = (role: string) => {
	return async <TResult, TVariables>(
		doc: string,
		variables: TVariables
	): Promise<TResult> => {
		let headers: any = {
			'Content-Type': 'application/json'
		};
		if (role !== 'anonymous') {
			headers = await addAuthorizationHeader(headers);
			headers["x-hasura-role"] = role;
		}
		const response = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_URL, {
			method: 'POST',
			headers,
			body: JSON.stringify({
				query: doc,
				variables
			})
		})

		const json = await response.json();
		if (json.errors) {
			throw json;
		}
		return json.data;
	}
}