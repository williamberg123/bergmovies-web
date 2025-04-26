import { NextPage } from 'next';
import Head from 'next/head';

import MySkeleton from '../../components/MySkeleton';

import { Container } from '../../styles/pages/moviepage';
import { useMoviePage } from '../../hooks/useMoviePage';
import { MoviePageLayout } from '../../components/MoviePageLayout';

const MoviePage: NextPage = () => {
	const { movie, isLoadingMoviePage } = useMoviePage();

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
						: <MoviePageLayout movie={movie!} />
				}
			</Container>
		</>
	);
};

export default MoviePage;
