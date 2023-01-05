import Link from 'next/link';
import { FC } from 'react';
import { FaStar } from 'react-icons/fa';
import useMediaQuery from '../../hooks/useMediaQuery';

import { AgeClassification, BackdropImage, BackdropImageContainer, Container, MovieData, MovieInfoContainer, MovieOverview, MovieProductionCompanies, MovieProductionCompany, MovieRuntime, MovieTagline, MovieTitle, MovieVoteAverage, ShadowEffectToBottom, ShadowEffectToRight } from './styles';

export const FeaturedMovie: FC = () => {
	const isScreenLessThan900px = useMediaQuery('(max-width: 900px)');

	const generateRuntime = (minutes: number) => {
		const min = minutes % 60;
		const hours = (minutes - min) / 60;

		return `${hours}h${min}min`;
	};

	const convertAverage = (average: number) => {
		return (average).toFixed(1);
	};

	return (
		<Container>
			<BackdropImageContainer>
				<BackdropImage src="https://image.tmdb.org/t/p/original/5wDBVictj4wUYZ31gR5WzCM9dLD.jpg" />
				<ShadowEffectToBottom />
			</BackdropImageContainer>

			<MovieInfoContainer>
				<MovieTitle>Mundo Estranho</MovieTitle>
				<MovieTagline>Descubra as impossibilidades.</MovieTagline>

				<MovieData>
					<MovieRuntime>{generateRuntime(102)}</MovieRuntime>
					<AgeClassification>L</AgeClassification>
					<MovieVoteAverage>
						{convertAverage(6.525)}
						<FaStar />
					</MovieVoteAverage>
				</MovieData>

				<MovieOverview>
					Uma lendária família de exploradores, os Clades, enquanto eles tentam navegar por uma terra
					inexplorada e traiçoeira ao lado de uma equipe heterogênea, incluindo uma bolha travessa, um
					cachorro de três patas e uma enorme quantidade de criaturas famintas.
				</MovieOverview>

				<MovieProductionCompanies>
					<MovieProductionCompany src="https://image.tmdb.org/t/p/w200/wdrCwmRnLFJhEoH8GSfymY85KHT.png" />
					<MovieProductionCompany src="https://image.tmdb.org/t/p/w200/tzsMJBJZINu7GHzrpYzpReWhh66.png" />
				</MovieProductionCompanies>

				<Link href="">Ver detalhes</Link>
			</MovieInfoContainer>

			{
				!isScreenLessThan900px && (
					<ShadowEffectToRight />
				)
			}
		</Container>
	);
};
