import { FC, memo } from 'react';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import { BsThreeDotsVertical } from 'react-icons/bs';

import { Container, HiddenContent, MovieName, MoviePoster, OptionsContainer } from './styles';
import { Movie as MovieType } from '../../@types/movie';
import { generateImageURL } from '../../utils';
import { toShow } from '../../store/modal';

const ListMovie: FC<MovieType> = ({ id, title, poster_path, backdrop_path }: MovieType) => {
	const dispatch = useDispatch();

	const toShowModal = () => {
		dispatch(toShow({ itemType: 'movie', name: title, backdropPath: backdrop_path }));
	};

	return (
		<Container>
			<MoviePoster src={generateImageURL('w300', poster_path || '')} />
			<HiddenContent>
				<MovieName>{title}</MovieName>

				<OptionsContainer>
					<Link href={`/movies/${id}`}>Ver detalhes</Link>
					<BsThreeDotsVertical onClick={toShowModal} />
				</OptionsContainer>
			</HiddenContent>
		</Container>
	);
};

export const Movie = memo(ListMovie);
