import { NextPage } from 'next';
import Head from 'next/head';

import MySkeleton from '../../components/MySkeleton';

import { Container } from '../../styles/pages/moviepage';
import { useMoviePage } from '../../hooks/useMoviePage';
import { MoviePageLayout } from '../../components/MoviePageLayout';
import MoreOptionsItemModal from '../../components/MoreOptionsItemModal';
import NewCollectionModal from '../../components/NewCollectionModal';
import { useCollections } from '../../hooks/useCollections';
import { useMoreOptionsItemModal } from '../../hooks/useMoreOptionsItemModal';

const MoviePage: NextPage = () => {
	const { movie, isLoadingMoviePage, recommendations } = useMoviePage();
	const { isNewCollectionModalVisible } = useCollections();
	const { isMoreOptionsItemModalVisible } = useMoreOptionsItemModal();

	return (
		<>
			<Head>
				<title>
					{!movie ? 'Filme' : `Filme | ${movie.title}`}
				</title>
			</Head>
			<Container>
				{
					isLoadingMoviePage
						? <MySkeleton />
						: <MoviePageLayout movie={movie!} recommendations={recommendations} />
				}

				{
					isMoreOptionsItemModalVisible && (<MoreOptionsItemModal />)
				}

				{
					isNewCollectionModalVisible && (<NewCollectionModal />)
				}
			</Container>
		</>
	);
};

export default MoviePage;
