import type { NextPage } from 'next';
import Head from 'next/head';
import { NavPage } from '../components/Layouts/NavPage';
import { useAuth } from '../services/firebase/auth';

const Home: NextPage = () => {
	const { userId } = useAuth();
	return <NavPage>
		<>
			<Head>
				<title>Dashboard</title>
			</Head>
			<div>Logged in as user {userId}</div>
		</>
	</NavPage>
}

export default Home
