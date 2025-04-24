import { FC } from 'react';
import Link from 'next/link';

import { useMessage } from '../../hooks/useMessage';
import { useFavorites } from '../../hooks/useFavorites';
import { FavoriteItemProps } from '../../@types/favorite';
import { generateImageURL } from '../../utils';

import { Container, FavoriteItemImage, FavoriteItemTitle, RemoveFromFavoritesButton } from './styles';

const FavoriteItem: FC<FavoriteItemProps> = ({ backdrop_path, title, type, id }) => {
	const { newMessage } = useMessage();
	const { removeItemFromFavorites } = useFavorites();

	const onRemoveItem = async (e: any) => {
		e.preventDefault();

		try {
			await removeItemFromFavorites(id);

			newMessage(`${type === 'movie' ? 'Filme' : 'Série'} removido`, 'success');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Link href={`${type === 'movie' ? 'movies' : 'series'}/${id}`}>
			<Container>
				<FavoriteItemTitle>{title}</FavoriteItemTitle>
				<FavoriteItemImage src={generateImageURL('w300', backdrop_path)} />
				<RemoveFromFavoritesButton onClick={onRemoveItem}>Remover dos favoritos</RemoveFromFavoritesButton>
			</Container>
		</Link>
	);
};

export default FavoriteItem;
