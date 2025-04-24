import { useEffect } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import { Header } from '../components/Header';

import { HomePageContainer } from '../styles/pages/home';
import { useCurrentPage } from '../hooks/useCurrentPage';

const Series: NextPage = () => {
	const { changePage } = useCurrentPage();

	useEffect(() => {
		changePage('series');
	}, []);

	return (
		<>
			<Head>
				<title>Séries</title>
			</Head>
			<HomePageContainer>
				<Header />
			</HomePageContainer>
		</>
	);
};

export default Series;
