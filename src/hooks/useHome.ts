import { useEffect, useMemo, useRef, useState } from 'react';
import { UseHomeResponse } from '../@types/home';
import { Movie } from '../@types/movie';
import { getData } from '../services/tmdb';
import { addMediaTypeMovie } from '../utils';

export const useHome = (): UseHomeResponse => {
	const [featuredMovie, setFeaturedMovie] = useState<Movie | null>(null);
	const [topRated, setTopRated] = useState<Movie[] | null>(null);
	const [recommendations, setRecommendations] = useState<Movie[] | null>(null);
	const [pageIsLoading, setPageIsLoading] = useState(true);

	const isFirstRender = useRef(true);

	const getTopRatedMovies = async () => {
		const topRatedResponse = await getData('/movie/top_rated');
		const topRatedUpdated = addMediaTypeMovie(topRatedResponse.results);
		setTopRated(topRatedUpdated);
	};

	const getFeaturedMovie = async (): Promise<String> => {
		const nowPlayingResponse = await getData('/movie/now_playing');

		const randomIndex = Math.floor(Math.random() * (nowPlayingResponse.results.length));
		const featuredMovieId = nowPlayingResponse.results[randomIndex].id;

		const featuredMovieResponse = await getData(`/movie/${featuredMovieId}`);
		setFeaturedMovie(featuredMovieResponse);

		return featuredMovieId;
	};

	const getRecommendations = async (featuredMovieId: String) => {
		const recommendatedMoviesResponse = await getData(`/movie/${featuredMovieId}/recommendations`);
		setRecommendations(recommendatedMoviesResponse.results);
	};

	const getHomePageInfo = async () => {
		try {
			getTopRatedMovies();

			const featuredMovieId = await getFeaturedMovie();
			await getRecommendations(featuredMovieId);
		} catch (error) {
			console.log(error);
		} finally {
			setPageIsLoading(false);
		}
	};

	useEffect(() => {
		if (isFirstRender.current) {
			getHomePageInfo();
			isFirstRender.current = false;
		}
	}, [getHomePageInfo]);

	const context = useMemo(() => ({
		featuredMovie, topRated, recommendations, pageIsLoading,
	}), [featuredMovie, topRated, recommendations, pageIsLoading]);

	return context;
};
