import { FC, useState } from 'react';
import Link from 'next/link';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { SlClose } from 'react-icons/sl';

import { Container, HiddenContent, MovieName, MoviePoster, Options, AddToCollectionButton, OptionsContainer, AddToFavoritesButton, CloseOptionsButton } from './styles';

export const Movie: FC = () => {
	const [isOpenOptions, setIsOpenOptions] = useState(false);

	// const movieRef = useRef();

	// const mouseOverFunc = () => {
	// 	setIsOpenOptions(false);
	// };

	// useEffect(() => {
	// 	if (isOpenOptions) {
	// 		movieRef.current.addEventListener('mouseout', mouseOverFunc);

	// 		return () => {
	// 			movieRef.current.removeEventListener('mouseout', mouseOverFunc);
	// 		};
	// 	}
	// }, [isOpenOptions]);

	return (
		<Container>
			<MoviePoster src="https://image.tmdb.org/t/p/w500/zQJcENHbZUpLQ8RKYt9wTzcXCwv.jpg" />
			<HiddenContent>
				<MovieName>Homem-aranha: Sem volta para casa</MovieName>

				<OptionsContainer>
					<Link href="">Ver detalhes</Link>
					<BsThreeDotsVertical onClick={() => setIsOpenOptions(true)} />

					{
						isOpenOptions && (
							<Options>
								<CloseOptionsButton onClick={() => setIsOpenOptions(false)}>
									<SlClose />
								</CloseOptionsButton>
								<AddToCollectionButton>Adicionar à coleção</AddToCollectionButton>
								<AddToFavoritesButton>Adicionar aos favoritos</AddToFavoritesButton>
							</Options>
						)
					}

				</OptionsContainer>
			</HiddenContent>
		</Container>
	);
};
