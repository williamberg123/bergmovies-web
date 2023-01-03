import { NextPage } from 'next';
import Head from 'next/head';
import { Header } from '../components/Header';
import { HomePageContainer } from '../styles/pages/home';

const Collections: NextPage = () => {
	return (
		<>
			<Head>
				<title>Coleções</title>
			</Head>
			<HomePageContainer>
				<Header />
			</HomePageContainer>
		</>
	);
};

export default Collections;
