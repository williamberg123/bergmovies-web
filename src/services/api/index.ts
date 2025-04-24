import axios from 'axios';

export const api = axios.create({
    baseURL: process.env.NODE_ENV === 'development'
	? 'http://localhost:5555/v1/'
	: 'https://bergmovies-api.onrender.com/v1',
});
