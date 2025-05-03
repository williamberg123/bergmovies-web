import { useEffect, useMemo, useRef, useState } from 'react';
import { UseHomeResponse } from '../@types/home';
import { Movie } from '../@types/movie';
import { getData, getRecommendationsMovies, getTopRatedMovies } from '../services/tmdb';

export const useHome = (): UseHomeResponse => {
	const [featuredMovie, setFeaturedMovie] = useState<Movie | null>(null);
	const [topRated, setTopRated] = useState<Movie[] | null>(null);
	const [recommendations, setRecommendations] = useState<Movie[] | null>(null);
	const [pageIsLoading, setPageIsLoading] = useState(true);

	const isFirstRender = useRef(true);

	const getTopRated = async () => {
		const topRatedUpdated = await getTopRatedMovies();
		if (!topRatedUpdated) return;

		setTopRated(topRatedUpdated);
	};

	const getFeaturedMovie = async (): Promise<string> => {
		const nowPlayingResponse = await getData('/movie/now_playing');

		const randomIndex = Math.floor(Math.random() * (nowPlayingResponse.results.length));
		const featuredMovieId = nowPlayingResponse.results[randomIndex].id;

		const featuredMovieResponse = await getData(`/movie/${featuredMovieId}`);
		setFeaturedMovie(featuredMovieResponse);

		return featuredMovieId;
	};

	const getRecommendations = async (itemId: string) => {
		const recommendatedMovies = await getRecommendationsMovies(itemId);
		setRecommendations(recommendatedMovies);
	};

	const getHomePageInfo = async () => {
		try {
			getTopRated();

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
