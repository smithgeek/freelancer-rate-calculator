import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../services/firebase/auth";
import { userSdk } from "./operations";

export const userClient = {
	useCurrentUser() {
		const { userId } = useAuth();
		return useQuery(['currentUser'], async () => {
			const response = await userSdk.User_GetCurrentUser();
			if (response.users.length > 0) {
				return response.users[0];
			}
			return null;
		}, { enabled: !!userId });
	}
}