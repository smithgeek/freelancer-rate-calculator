import { useRouter } from "next/router";
import { NavigationItem } from "./NavigationItem";

export function useNavigationItems() {
	const router = useRouter();
	const navItems: NavigationItem[] = [];
	return navItems;
}