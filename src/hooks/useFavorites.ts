import { useContext } from 'react';

import { FavoritesContext } from '../contexts/FavoritesProvider';
import { FavoriteProviderType } from '../@types/favorite';

export const useFavorites = () => {
	const context = useContext(FavoritesContext) as FavoriteProviderType;

	return context;
};
