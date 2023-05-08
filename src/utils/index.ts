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
