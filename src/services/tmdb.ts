import axios from 'axios';

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
		console.log(error);
	}
};
