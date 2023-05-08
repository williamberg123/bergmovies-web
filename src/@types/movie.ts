export interface ProductionCompanyProps {
	id: number;
	logo_path: string;
	name: string;
}

interface Genre {
	id: number;
	name: string;
}

export interface Movie {
	id: number;
	title: string;
	tagline: string;
	overview: string | null;
	poster_path: string | null;
	backdrop_path: string | null;
	runtime: number;
	vote_average: number;
	production_companies: ProductionCompanyProps[]
	adult: boolean;
	genres: Genre[];
	release_date: Date;
}
