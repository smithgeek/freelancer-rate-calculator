import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../services/firebase/auth";
import { adminSdk } from "./operations";

export const adminClient = {
	useAllUsers() {
		const { role } = useAuth();
		return useQuery(['allUsers'], async () => {
			const response = await adminSdk.Admin_GetUsers();
			return response.users;
		}, { enabled: role === 'admin' });
	}
}