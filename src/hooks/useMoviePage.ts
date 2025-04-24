import { useCallback, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { Movie } from '../@types/movie';
import { getData } from '../services/tmdb';

interface UseMoviePageResponse {
	movie: Movie | null;
	isLoadingMoviePage: boolean;
}

export const useMoviePage = (): UseMoviePageResponse => {
	const [movie, setMovie] = useState<Movie | null>(null);
	const [isLoadingMoviePage, setIsLoadingMoviePage] = useState(true);

	const { query } = useRouter();

	const getMovieInfo = useCallback(async () => {
		try {
			setIsLoadingMoviePage(true);

			const data = await getData(`/movie/${query.id}`);
			setMovie(data);
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
		movie, isLoadingMoviePage,
	}), [movie, isLoadingMoviePage]);

	return context;
};
