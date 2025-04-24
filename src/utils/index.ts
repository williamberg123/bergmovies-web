import { Movie } from '../@types/movie';
import { PAGES } from '../constants/pages';

type SizeOptions = 'w200' | 'w300' | 'w500' | 'w780' | 'original';

export const generateImageURL = (size: SizeOptions, path: string) => {
	return `https://image.tmdb.org/t/p/${size}/${path}`;
};

export const generateRuntime = (minutes: number) => {
	const min = minutes % 60;
	const hours = (minutes - min) / 60;

	return `${hours}h${min}min`;
};

export const generateFormatedDate = (d: Date | undefined) => {
	if (!d) return null;
	const date = new Date(d);

	const day = date.getDate() >= 9 ? date.getDate() + 1 : `0${date.getDate() + 1}`;
	const month = date.getMonth() >= 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;

	const formatedDate = `${day}/${month}/${date.getFullYear()}`;

	return formatedDate;
};

export const isPublicPage = (pagePath: string) => {
	const isPublic = PAGES.public.includes(pagePath);
	return isPublic;
};

export const isAuthenticated = () => { };

export const saveTokenInCookies = (token: string | number) => {
	document.cookie = `user_token=${token};`;
};

export const accessSavedToken = (tokenName: string) => {
	if (!global.document) return false;

	let cookies = document.cookie;

	if (cookies.indexOf(`${tokenName}=`) == -1) {
		return false;
	}

	cookies = cookies.substring(cookies.indexOf(`${tokenName}=`), cookies.length);

	if (cookies.indexOf(';') != -1) {
		cookies = cookies.substring(0, cookies.indexOf(';'));
	}

	[, cookies] = cookies.split('=');

	return decodeURI(cookies);
};

export const deleteSavedToken = (tokenName: string) => {
	document.cookie = `${tokenName}=;`;
};

export const addMediaTypeMovie = (array: Movie[]): Movie[] => {
	const newArray: Movie[] = array.map((item) => ({ ...item, media_type: 'movie' }));

	return newArray;
};
