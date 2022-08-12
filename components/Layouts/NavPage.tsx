import { ReactNode } from "react";
import { BottomNavigation } from "./BottomNavigation";
import { useNavigationItems } from "./NavigationItems";
import { Sidebar } from "./Sidebar";

export function NavPage({ children }: { children: ReactNode }) {
	const navItems = useNavigationItems();
	return <div>
		<div className="flex">
			<Sidebar header={{ title: process.env.NEXT_PUBLIC_APP_NAME }} items={navItems} className="hidden sm:block" />
			<div className="flex-1">
				{children}
			</div>
		</div>
		<BottomNavigation items={navItems} className="sm:hidden" />
	</div>
}