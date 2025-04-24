import { Movie } from './movie';

export interface UseHomeResponse {
	featuredMovie: Movie | null;
	topRated: Movie[] | null;
	recommendations: Movie[] | null;
	pageIsLoading: boolean;
}
