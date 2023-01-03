import { NextPage } from 'next';
import Head from 'next/head';
import { Header } from '../components/Header';
import { HomePageContainer } from '../styles/pages/home';

const Favorites: NextPage = () => {
	return (
		<>
			<Head>
				<title>Favoritos</title>
			</Head>
			<HomePageContainer>
				<Header />
			</HomePageContainer>
		</>
	);
};

export default Favorites;
