import { FC, memo, useState } from 'react';
import Link from 'next/link';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { SlClose } from 'react-icons/sl';
import { IoIosArrowDown } from 'react-icons/io';

import { Container, HiddenContent, MovieName, MoviePoster, Options, AddToCollectionButton, OptionsContainer, AddToFavoritesButton, CloseOptionsButton } from './styles';
import { Movie as MovieType } from '../../@types/movie';
import { generateImageURL } from '../../utils';

const ListMovie: FC<MovieType> = ({ id, title, poster_path }: MovieType) => {
	const [isOpenOptions, setIsOpenOptions] = useState(false);

	return (
		<Container>
			<MoviePoster src={generateImageURL('w300', poster_path || '')} />
			<HiddenContent>
				<MovieName>{title}</MovieName>

				<OptionsContainer>
					<Link href={`/movies/${id}`}>Ver detalhes</Link>
					<BsThreeDotsVertical onClick={() => setIsOpenOptions(true)} />

					{
						isOpenOptions && (
							<Options>
								<CloseOptionsButton onClick={() => setIsOpenOptions(false)}>
									<SlClose />
								</CloseOptionsButton>
								<AddToCollectionButton>
									Adicionar à coleção
									<IoIosArrowDown />
								</AddToCollectionButton>
								<AddToFavoritesButton>Adicionar aos favoritos</AddToFavoritesButton>
							</Options>
						)
					}
				</OptionsContainer>
			</HiddenContent>
		</Container>
	);
};

export const Movie = memo(ListMovie);
