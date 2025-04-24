export interface FavoriteItemProps {
    id: number;
    title: string;
    backdrop_path: string;
    type: 'movie' | 'serie';
	// eslint-disable-next-line
}

export interface FavoriteProviderType {
	isLoading: boolean;
	favorites: FavoriteItemProps[]
	getFavorites: () => void;
	// eslint-disable-next-line
	addToFavorites: () => void;
	// eslint-disable-next-line
	removeItemFromFavorites: (item_id: number) => void;
}
