type SizeOptions = 'w200' | 'w300' | 'w500' | 'w780' | 'original';

export const generateImageURL = (size: SizeOptions, path: string) => {
	return `https://image.tmdb.org/t/p/${size}/${path}`;
};

export const generateRuntime = (minutes: number) => {
	const min = minutes % 60;
	const hours = (minutes - min) / 60;

	return `${hours}h${min}min`;
};
