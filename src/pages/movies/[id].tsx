import { NextPage } from 'next';
import { Header } from '../../components/Header';
import { Container } from '../../styles/pages/moviepage';
import { getData } from '../../services/tmdb';
import { useEffect, useState } from 'react';
import { Movie } from '../../@types/movie';
import { useRouter } from 'next/router';

const MoviePage: NextPage = () => {
	const [movie, setMovie] = useState<Movie | null>(null);
	const { query } = useRouter();

	const getMovieInfo = async () => {
		const data = await getData(`/movie/${query.id}`);
		setMovie(data);
		console.log(data);
	};

	useEffect(() => {
		getMovieInfo();
	}, []);

	return (
		<Container>
			<Header />
			<h1>{movie?.title}</h1>
		</Container>
	);
};

export default MoviePage;
