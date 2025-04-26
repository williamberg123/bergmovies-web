import { FC } from 'react';
import Link from 'next/link';

import { useMessage } from '../../hooks/useMessage';
import { useFavorites } from '../../hooks/useFavorites';
import { FavoriteItemProps } from '../../@types/favorite';
import { generateImageURL } from '../../utils';

import { Container, FavoriteItemImage, FavoriteItemTitle, RemoveFromFavoritesButton } from './styles';
import useMediaQuery from '../../hooks/useMediaQuery';

const FavoriteItem: FC<FavoriteItemProps> = ({ backdrop_path, title, type, id }) => {
	const { newMessage } = useMessage();
	const { removeItemFromFavorites } = useFavorites();
	const isLessThan700px = useMediaQuery('(max-width: 700px)');

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
				<FavoriteItemImage src={generateImageURL(isLessThan700px ? 'w200' : 'w300', backdrop_path)} />
				<RemoveFromFavoritesButton onClick={onRemoveItem}>Remover dos favoritos</RemoveFromFavoritesButton>
			</Container>
		</Link>
	);
};

export default FavoriteItem;
