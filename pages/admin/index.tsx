import type { NextPage } from 'next';
import Head from 'next/head';
import { NavPage } from '../../components/Layouts/NavPage';
import { adminClient } from '../../graphql/Admin/hooks';
import { SubscriptionStatus, useAuth, useRequireRole } from '../../services/firebase/auth';

const Home: NextPage = () => {
	useRequireRole('admin', '/dashboard')
	const usersQuery = adminClient.useAllUsers();
	const { impersonate, userId } = useAuth();
	return <NavPage>
		<>
			<Head>
				<title>Admin</title>
			</Head>
			<div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
				{usersQuery.data?.map(user => {
					return <div className="card bg-neutral shadow-xl m-4" key={user.id}>
						<div className="card-body p-4">
							<h2 className="card-title flex-1">{user?.name ?? user.email}</h2>
							<div>Subscription: {SubscriptionStatus[user.account.subscription?.status ?? 3]}</div>
							<div className="card-actions flex">
								<button disabled={userId === user.id} className="btn btn-primary flex-1 btn-sm w-28" onClick={() => impersonate(user.id)}>Impersonate</button>
							</div>
						</div>
					</div>
				})}
			</div>
		</>
	</NavPage>
}

export default Home
