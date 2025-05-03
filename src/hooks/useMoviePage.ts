import { useCallback, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { Movie } from '../@types/movie';
import { getMovie, getRecommendationsMovies } from '../services/tmdb';

interface UseMoviePageResponse {
	movie: Movie | null;
	recommendations: Movie[] | null;
	isLoadingMoviePage: boolean;
}

export const useMoviePage = (): UseMoviePageResponse => {
	const [movie, setMovie] = useState<Movie | null>(null);
	const [recommendations, setRecommendations] = useState<Movie[] | null>(null);
	const [isLoadingMoviePage, setIsLoadingMoviePage] = useState(true);

	const { query } = useRouter();

	const getMovieInfo = useCallback(async () => {
		try {
			setIsLoadingMoviePage(true);

			if (!query.id) return;

			const movieData = await getMovie(String(query?.id));
			if (!movieData) return;

			setMovie(movieData);

			const recommendatedMovies = await getRecommendationsMovies(movieData.id);

			if (recommendatedMovies) {
				setRecommendations(recommendatedMovies);
			}
		} catch (error) {
			console.log('error', error);
		} finally {
			setIsLoadingMoviePage(false);
		}
	}, [query.id]);

	useEffect(() => {
		if (!query?.id) return;

		getMovieInfo();
	}, [query.id]);

	const context = useMemo(() => ({
		movie, isLoadingMoviePage, recommendations,
	}), [movie, isLoadingMoviePage, recommendations]);

	return context;
};
