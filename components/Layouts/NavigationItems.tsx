import { useRouter } from "next/router";
import { addAuthorizationHeader } from "../../graphql/FetchRequester";
import { useAuth } from "../../services/firebase/auth";
import { AdminIcon } from "../Icons/AdminIcon";
import { LogoutIcon } from "../Icons/LogoutIcon";
import { TemplateIcon } from "../Icons/TemplateIcon";
import { NavigationItem } from "./NavigationItem";

async function getBillingPortalUrl() {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/billing/stripe/portal?returnUrl=${location.origin}/menus`, {
		headers: await addAuthorizationHeader({ 'Content-Type': 'application/json' })
	});
	const json = await response.json();
	return json.url;
}

export async function redirectToStripeBilling() {
	const url = await getBillingPortalUrl();
	location.href = url;
}

export function useNavigationItems() {
	const { signOut: userAuthSignOut, role } = useAuth();
	const router = useRouter();
	const signOut = async () => {
		await router.push("/");
		await userAuthSignOut();
	}
	const navItems: NavigationItem[] = [
		{
			text: "Dashboard",
			icon: <TemplateIcon />,
			type: "link",
			active: router.pathname.startsWith("/dashboard"),
			href: "/dashboard"
		}
	];
	if (role === 'admin') {
		navItems.push({
			text: "Admin",
			icon: <AdminIcon className="w-6" />,
			type: "link",
			href: "/admin",
			active: router.pathname.startsWith("/admin")
		});
	}
	else {
		navItems.push({
			text: "Billing",
			icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
				<path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
			</svg>,
			type: "text",
			onClick: redirectToStripeBilling
		});
	}
	navItems.push({
		text: "Logout",
		type: "text",
		icon: <LogoutIcon />,
		onClick: signOut
	});
	return navItems;
}