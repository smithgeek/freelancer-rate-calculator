import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import ReactModal from 'react-modal';
import { useAuthProvider } from '../services/firebase/auth';
import '../styles/globals.css';

ReactModal.setAppElement("#__next");

const queryClient = new QueryClient();
function MyApp({ Component, pageProps }: AppProps) {
	useAuthProvider();
	return <QueryClientProvider client={queryClient}>
		<Head>
			<title>{process.env.NEXT_PUBLIC_APP_NAME}</title>
			<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
			<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
			<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
			<link rel="manifest" href="/site.webmanifest" />
			<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
			<meta name="msapplication-TileColor" content="#da532c" />
			<meta name="theme-color" content="</meta>#ffffff" />
		</Head>
		<Component {...pageProps} />
		<ReactQueryDevtools />
	</QueryClientProvider>
}

export default MyApp
if (typeof window !== 'undefined') {
	const _global = window as any;
	_global.printEnv = () => {
		console.log({
			"graphql": process.env.NEXT_PUBLIC_GRAPHQL_URL,
			"api": process.env.NEXT_PUBLIC_API_URL,
			"firebase": process.env.NEXT_PUBLIC_FIREBASE_EMULATOR,
			"key": process.env.NEXT_PUBLIC_JWT_KEY,
			"hobby": process.env.NEXT_PUBLIC_HOBBY_PLAN,
			"business": process.env.NEXT_PUBLIC_BUSINESS_PLAN
		})
	}
}