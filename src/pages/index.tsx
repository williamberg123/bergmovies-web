import { useEffect } from 'react';
import Head from 'next/head';
import { NextPage } from 'next';

import { FeaturedMovie } from '../components/FeaturedMovie';
import { Header } from '../components/Header';
import { MoviesList } from '../components/MoviesList';
import FirstPageLoading from '../components/FirstPageLoading';
import MoreOptionsItemModal from '../components/MoreOptionsItemModal';
import NewCollectionModal from '../components/NewCollectionModal';

import { useMoreOptionsItemModal } from '../hooks/useMoreOptionsItemModal';
import { useCollections } from '../hooks/useCollections';
import { useHome } from '../hooks/useHome';

import { HomePageContainer } from '../styles/pages/home';
import { useCurrentPage } from '../hooks/useCurrentPage';

const Home: NextPage = () => {
	const { featuredMovie, recommendations, topRated, pageIsLoading } = useHome();
	const { isMoreOptionsItemModalVisible } = useMoreOptionsItemModal();
	const { isNewCollectionModalVisible } = useCollections();
	const { changePage } = useCurrentPage();

	useEffect(() => {
		changePage('movies');
	}, []);

	return (
		<>
			<Head>
				<title>Filmes</title>
			</Head>
			<HomePageContainer>
				<Header />
				{
					pageIsLoading && <FirstPageLoading />
				}

				{
					(!pageIsLoading) && (
						<>
							<FeaturedMovie {...featuredMovie!} />
							<MoviesList title="Recomendados para você" items={recommendations!} />
							<MoviesList title="Em Alta" items={topRated!} />
						</>
					)
				}

				{
					isMoreOptionsItemModalVisible && (<MoreOptionsItemModal />)
				}

				{
					isNewCollectionModalVisible && (<NewCollectionModal />)
				}
			</HomePageContainer>
		</>
	);
};

export default Home;
