import { createContext, ReactNode, useEffect, useMemo, useState } from 'react';
import { isAxiosError } from 'axios';

import { FavoriteItemProps } from '../@types/favorite';
import { useAuth } from '../hooks/useAuth';
import { api } from '../services/api';
import { useMessage } from '../hooks/useMessage';
import { useMoreOptionsItemModal } from '../hooks/useMoreOptionsItemModal';

export const FavoritesContext = createContext({});

export default function FavoritesProvider({ children }: { children: ReactNode }) {
	const [favorites, setFavorites] = useState<FavoriteItemProps[] | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	const { token, user } = useAuth();
	const { newMessage } = useMessage();
	const { closeMoreOptions, item } = useMoreOptionsItemModal();

	const getFavorites = async () => {
		try {
			setIsLoading(true);

			const response = await api.get(`/favorites/${user.fav_list_id}`, {
				headers: {
					authorization: `Bearer ${token}`,
				},
			});

			setFavorites(response.data.favorites_list.items_list);
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};

	const addToFavorites = async () => {
		try {
			const { id, backdrop_path, title } = item!;

			const response = await api.patch(`/favorites/${user.fav_list_id}/add_item`, {
				item: {
					id,
					type: 'movie',
					backdrop_path,
					title,
				},
			}, {
				headers: {
					authorization: `Bearer ${token}`,
				},
			});

			if (response.data) {
				closeMoreOptions();
				newMessage(`Filme "${title}" adicionado à lista de favoritos`, 'success');
			}
		} catch (error) {
			console.log(error);

			if (!isAxiosError(error)) {
				return;
			}

			if (error.response?.data?.message === 'movie is already in this list') {
				newMessage('Este filme já se encontra nos seus favoritos', 'error');
			}
		}
	};

	const removeItemFromFavoritesList = (item_id: number) => {
		const updatedArray = favorites?.filter(({ id }) => id !== item_id);
		setFavorites(updatedArray!);
	};

	const removeItemFromFavorites = async (item_id: number) => {
		try {
			await api.patch(`/favorites/${user.fav_list_id}/remove_item`, {
				item_id,
			}, {
				headers: {
					authorization: `Bearer ${token}`,
				},
			});

			removeItemFromFavoritesList(item_id);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (!user?.id) return;
		getFavorites();
	}, [user]);

	const context = useMemo(() => ({
		isLoading, favorites, getFavorites, removeItemFromFavorites, addToFavorites,
	}), [isLoading, favorites, getFavorites, removeItemFromFavorites, addToFavorites]);

	return (
		<FavoritesContext.Provider value={context}>
			{children}
		</FavoritesContext.Provider>
	);
}
