import axios from 'axios';
import { addMediaTypeMovie } from '../utils';
import { Movie } from '../@types/movie';

export const tmdb = axios.create({
	baseURL: 'https://api.themoviedb.org/3',
});

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_CONFIG = `?api_key=${API_KEY}&language=pt-BR`;

export const getData = async (endpoint: string) => {
	try {
		const { data } = await tmdb.get(`${endpoint}${BASE_CONFIG}`);
		return data;
	} catch (error) {
		// console.log(error);
	}
};

export const getMovie = async (itemId: string): Promise<Movie | null | undefined> => {
	const movieData = await getData(`/movie/${itemId}`);
	return movieData;
};

export const getTopRatedMovies = async (): Promise<Movie[] | null | undefined> => {
	const topRatedResponse = await getData('/movie/top_rated');
	const topRatedUpdated = addMediaTypeMovie(topRatedResponse.results);
	return topRatedUpdated;
};

export const getRecommendationsMovies = async (itemId: string) => {
	const recommendatedMoviesResponse = await getData(`/movie/${itemId}/recommendations`);
	return recommendatedMoviesResponse.results;
};
