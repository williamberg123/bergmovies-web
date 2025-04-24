import { useEffect } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import { Header } from '../components/Header';
import FavoriteItem from '../components/FavoriteItem';
import NoData from '../components/NoData';
import { useFavorites } from '../hooks/useFavorites';

import { HomePageContainer } from '../styles/pages/home';
import { FavoritesListContainer, FavoritesPageTitle } from '../styles/pages/favorite';
import { useCurrentPage } from '../hooks/useCurrentPage';
import FirstPageLoading from '../components/FirstPageLoading';

const Favorites: NextPage = () => {
	const { favorites, isLoading, getFavorites } = useFavorites();
	const { changePage } = useCurrentPage();

	useEffect(() => {
		changePage('favorites');
		getFavorites();
	}, []);

	if (isLoading) {
		return <FirstPageLoading />;
	}

	return (
		<>
			<Head>
				<title>Favoritos</title>
			</Head>
			<HomePageContainer>
				<Header />

				<FavoritesPageTitle>Seus favoritos</FavoritesPageTitle>

				<FavoritesListContainer>
					{
						(!isLoading && !favorites?.length) && <NoData message="Nenhum item salvo nos favoritos" size="1.4rem" />
					}
					{
						!!favorites?.length && favorites.map((i) => (
							<FavoriteItem
								key={i.id}
								{...i}
							/>
						))
					}
				</FavoritesListContainer>
			</HomePageContainer>
		</>
	);
};

export default Favorites;
