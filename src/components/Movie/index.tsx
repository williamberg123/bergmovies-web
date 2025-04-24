import { FC, memo } from 'react';
import Link from 'next/link';
import { BsThreeDotsVertical } from 'react-icons/bs';

import { Movie as MovieType } from '../../@types/movie';
import { generateImageURL } from '../../utils';

import { Container, HiddenContent, MovieName, MoviePoster, OptionsContainer } from './styles';
import { useMoreOptionsItemModal } from '../../hooks/useMoreOptionsItemModal';

const ListMovie: FC<MovieType> = ({ id, title, poster_path, backdrop_path, media_type }) => {
	const item = { id, title, poster_path, backdrop_path, media_type } as MovieType;
	const { openMoreOptions } = useMoreOptionsItemModal();

	return (
		<Container>
			<MoviePoster src={generateImageURL('w300', poster_path || '')} />
			<HiddenContent>
				<MovieName>{title}</MovieName>

				<OptionsContainer>
					<Link href={`/movies/${id}`}>Ver detalhes</Link>
					<BsThreeDotsVertical onClick={() => openMoreOptions(item)} />
				</OptionsContainer>
			</HiddenContent>
		</Container>
	);
};

export const Movie = memo(ListMovie);
