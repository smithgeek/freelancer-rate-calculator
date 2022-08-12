import { ReactNode } from "react";
import { userClient } from "../../graphql/User/hooks";
import { SubscriptionStatus, useAuth } from "../../services/firebase/auth";
import { BottomNavigation } from "./BottomNavigation";
import Login from "./Login";
import { redirectToStripeBilling, useNavigationItems } from "./NavigationItems";
import { Sidebar } from "./Sidebar";
function ImpersonationBanner() {
	const { endImpersonation } = useAuth();
	const currentUserQuery = userClient.useCurrentUser();
	return <div className="alert alert-warning shadow-lg rounded-none mb-2">
		<div>
			<svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
			<div>
				<span>You are impersonating {currentUserQuery.data?.name ?? currentUserQuery.data?.email}.</span>
				<button className="btn btn-primary btn-sm ml-4" onClick={() => endImpersonation()}>Stop</button>
			</div>
		</div>
	</div>
}

export function NavPage({ children }: { children: ReactNode }) {
	const navItems = useNavigationItems();
	const { subscription, impersonating, endImpersonation, userId } = useAuth();
	if (!userId) {
		return <Login providers={['Password', 'Google']} />
	}
	return <div>
		<div className="flex">
			<Sidebar header={{ title: process.env.NEXT_PUBLIC_APP_NAME }} items={navItems} className="hidden sm:block" />
			<div className="flex-1">
				{subscription === SubscriptionStatus.Inactive && <div className="alert alert-warning shadow-lg rounded-none mb-2">
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
						<div>
							<span>Your subscription is inactive.</span>
							<button className="btn btn-primary btn-sm ml-4" onClick={redirectToStripeBilling}>Fix it now</button>
						</div>
					</div>
				</div>
				}
				{impersonating && <ImpersonationBanner />}
				{children}
			</div>
		</div>
		<BottomNavigation items={navItems} className="sm:hidden" />
	</div>
}