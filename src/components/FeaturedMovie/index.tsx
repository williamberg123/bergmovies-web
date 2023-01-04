import { FC } from 'react';
import { FaStar } from 'react-icons/fa';

import { AgeClassification, BackdropImage, Container, MovieData, MovieInfoContainer, MovieOverview, MovieProductionCompanies, MovieProductionCompany, MovieRuntime, MovieTagline, MovieTitle, MovieVoteAverage, ShadowEffectToBottom, ShadowEffectToRight } from './styles';

export const FeaturedMovie: FC = () => {
	const generateRuntime = (minutes: number) => {
		const min = minutes % 60;
		const hours = (minutes - min) / 60;

		return `${hours}H${min}min`;
	};

	return (
		<Container>
			<BackdropImage src="https://image.tmdb.org/t/p/original/5wDBVictj4wUYZ31gR5WzCM9dLD.jpg" />

			<MovieInfoContainer>
				<MovieTitle>Mundo Estranho</MovieTitle>
				<MovieTagline>Descubra as impossibilidades.</MovieTagline>

				<MovieData>
					<MovieRuntime>{generateRuntime(102)}</MovieRuntime>
					<AgeClassification>L</AgeClassification>
					<MovieVoteAverage>
						6.525
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
			</MovieInfoContainer>

			<ShadowEffectToRight />
			<ShadowEffectToBottom />
		</Container>
	);
};
