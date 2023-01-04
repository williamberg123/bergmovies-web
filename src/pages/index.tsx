import { NextPage } from 'next';
import Head from 'next/head';
import { Header } from '../components/Header';
import { MoviesList } from '../components/MoviesList';
import { HomePageContainer } from '../styles/pages/home';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Filmes</title>
			</Head>
			<HomePageContainer>
				<Header />
				<MoviesList title="Recomendados para você" items={Array(20).fill('')} />
			</HomePageContainer>
		</>
	);
};

export default Home;
