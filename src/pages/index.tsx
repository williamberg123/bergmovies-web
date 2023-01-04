import { NextPage } from 'next';
import Head from 'next/head';
import { FeaturedMovie } from '../components/FeaturedMovie';
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
				<FeaturedMovie />
				<MoviesList title="Recomendados" items={Array(20).fill('')} />
			</HomePageContainer>
		</>
	);
};

export default Home;
