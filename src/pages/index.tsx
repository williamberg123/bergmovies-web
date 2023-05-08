import { NextPage } from 'next';
import { useSelector } from 'react-redux';
import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import { Movie } from '../@types/movie';
import { FeaturedMovie } from '../components/FeaturedMovie';
import { Header } from '../components/Header';
import { MoviesList } from '../components/MoviesList';
import { getData } from '../services/tmdb';
import { HomePageContainer } from '../styles/pages/home';
import MoreOptionsMovieModal, { ModalType } from '../components/MoreOptionsMovieModal';

const Home: NextPage = () => {
	const [featuredMovie, setFeaturedMovie] = useState<Movie | null>(null);
	const [topRated, setTopRated] = useState<Movie[] | null>(null);
	const [recommendations, setRecommendations] = useState<Movie[] | null>(null);

	const isFirstRender = useRef(true);

	const { modal } = useSelector((state: { modal: ModalType }) => state);

	const getHomePageInfo = async () => {
		const [topRatedResponse, nowPlayingResponse] = await Promise.all([
			getData('/movie/top_rated'), getData('/movie/now_playing'),
		]);

		const randomIndex = Math.floor(Math.random() * (nowPlayingResponse.results.length));
		const featuredMovieId = nowPlayingResponse.results[randomIndex].id;

		const [featuredMovieResponse, recommendatedMoviesResponse] = await Promise.all([
			getData(`/movie/${featuredMovieId}`), getData(`/movie/${featuredMovieId}/recommendations`),
		]);

		setFeaturedMovie(featuredMovieResponse);
		setRecommendations(recommendatedMoviesResponse.results);
		setTopRated(topRatedResponse.results);
	};

	useEffect(() => {
		if (isFirstRender.current) {
			getHomePageInfo();
			isFirstRender.current = false;
		}
	}, []);

	return (
		<>
			<Head>
				<title>Filmes</title>
			</Head>
			<HomePageContainer>
				<Header />
				{
					(topRated && recommendations && featuredMovie) && (
						<>
							<FeaturedMovie {...featuredMovie} />
							<MoviesList title="Recomendados para você" items={recommendations} />
							<MoviesList title="Em Alta" items={topRated} />
						</>
					)
				}
				{
					modal.isVisible && <MoreOptionsMovieModal />
				}
			</HomePageContainer>
		</>
	);
};

export default Home;
