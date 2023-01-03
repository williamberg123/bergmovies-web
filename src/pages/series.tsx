import { NextPage } from 'next';
import Head from 'next/head';
import { Header } from '../components/Header';
import { HomePageContainer } from '../styles/pages/home';

const Series: NextPage = () => {
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
