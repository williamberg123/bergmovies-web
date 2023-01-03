import { NextPage } from 'next';
import Head from 'next/head';
import { Header } from '../components/Header';
import { HomePageContainer } from '../styles/pages/home';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Filmes</title>
			</Head>
			<HomePageContainer>
				<Header />
			</HomePageContainer>
		</>
	);
};

export default Home;
