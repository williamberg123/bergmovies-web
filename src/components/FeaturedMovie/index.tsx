import { FC } from 'react';
import { FaStar } from 'react-icons/fa';
import { BiCameraMovie } from 'react-icons/bi';

import { Movie } from '../../@types/movie';
import useMediaQuery from '../../hooks/useMediaQuery';

import {
	BackdropImage,
	BackdropImageContainer,
	Container,
	Genres,
	MovieData,
	MovieInfoContainer,
	MovieOverview,
	MovieRuntime,
	MovieTagline,
	MovieTitle,
	MovieVoteAverage,
	NowPlaying,
	SeeDetails,
	ShadowEffectToBottom,
	ShadowEffectToRight,
} from './styles';
import { generateImageURL, generateRuntime } from '../../utils';

export const FeaturedMovie: FC<Movie> = (props: Movie) => {
	const { id, title, tagline, overview, backdrop_path, runtime, vote_average, genres } = props;

	const isScreenLessThan900px = useMediaQuery('(max-width: 900px)');

	const convertAverage = (average: number) => {
		return (average).toFixed(1);
	};

	const overviewText = overview && overview?.length > 400
	? `${overview?.split('').slice(0, 400).join('')} ...`
	: overview;

	const backdropImageUrl = isScreenLessThan900px
	? generateImageURL('w780', backdrop_path || '')
	: generateImageURL('original', backdrop_path || '');

	return (
		<Container>
			<BackdropImageContainer>
				<NowPlaying>
					Nos cinemas
					<BiCameraMovie />
				</NowPlaying>
				<BackdropImage src={backdropImageUrl} />
				<ShadowEffectToBottom />
			</BackdropImageContainer>

			<MovieInfoContainer>
				<MovieTitle>
					{title}
				</MovieTitle>
				<MovieTagline>{tagline}</MovieTagline>

				<MovieData>
					<MovieRuntime>{generateRuntime(runtime)}</MovieRuntime>
					<Genres>
						{
							genres.map(({ name }, index) => (
								index > 0
									? ` | ${name}`
									: name
							))
						}
					</Genres>
					<MovieVoteAverage>
						{convertAverage(vote_average)}
						<FaStar />
					</MovieVoteAverage>
				</MovieData>

				<MovieOverview>
					{overviewText}
				</MovieOverview>

				<SeeDetails href={`/movies/${id}`}>Ver detalhes</SeeDetails>
			</MovieInfoContainer>

			{
				!isScreenLessThan900px && (
					<ShadowEffectToRight />
				)
			}
		</Container>
	);
};
