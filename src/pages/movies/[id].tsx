import { NextPage } from 'next';
import Head from 'next/head';

import ProductionCompany from '../../components/ProductionCompany';
import MySkeleton from '../../components/MySkeleton';

import { AgeClassification, Container, Genres, GenresSeparator, ImageAndDescriptionContainer, MovieBackdropImage, MovieDetails, MovieInfo, MovieOverview, MoviePageHeader, MovieTagline, MovieTitle, ProductionCompanies, ProductionCompaniesContainer, ReleaseDate, Runtime } from '../../styles/pages/moviepage';
import { generateFormatedDate, generateImageURL, generateRuntime } from '../../utils';
import BackPageButton from '../../components/BackPageButton';
import { useMoviePage } from '../../hooks/useMoviePage';

const MoviePage: NextPage = () => {
	const { movie, isLoadingMoviePage } = useMoviePage();

	return (
		<>
			<Head>
				<title>
					{!movie ? 'Filme' : `Filme | ${movie.title}`}
				</title>
			</Head>
			<Container>
				{
					isLoadingMoviePage
						? <MySkeleton />
						: (
							<>
								<BackPageButton />
								<MoviePageHeader>
									<MovieTitle>{movie?.title}</MovieTitle>
									<MovieTagline>{movie?.tagline}</MovieTagline>
									<MovieDetails>
										<AgeClassification isAdult={movie?.adult}>
											<p>Classificação</p>
											<span>
												{movie?.adult ? '18' : 'L'}
											</span>
										</AgeClassification>

										<Runtime>
											<p>Duração</p>
											<span>{movie?.runtime ? generateRuntime(movie?.runtime) : 'S/N'}</span>
										</Runtime>

										<ReleaseDate>
											<p>Data de lançamento</p>
											{generateFormatedDate(movie?.release_date)}
										</ReleaseDate>

										<Genres>
											<p>Gênero(s)</p>
											<span>
												{
													movie?.genres.map(({ name }, index, array) => {
														if ((index + 1) < array.length) {
															return (
																<span key={`span-${index}`}>
																	{name}<GenresSeparator>|</GenresSeparator>
																</span>
															);
														}
														return <span>{name}</span>;
													})
												}
											</span>
										</Genres>
									</MovieDetails>
								</MoviePageHeader>

								<ImageAndDescriptionContainer>
									<MovieBackdropImage src={generateImageURL('w780', movie?.backdrop_path || '')} />
									<MovieInfo>
										<MovieOverview>
											{
												movie?.overview
													? `${movie?.overview?.slice(0, 300)}...`
													: null
											}
										</MovieOverview>
									</MovieInfo>
								</ImageAndDescriptionContainer>

								<ProductionCompaniesContainer>
									<span>Produzido por:</span>
									<ProductionCompanies>
										{movie?.production_companies.map((company) => {
											if (!company.logo_path) return;
											return <ProductionCompany {...company} />;
										})}
									</ProductionCompanies>
								</ProductionCompaniesContainer>
							</>
						)
				}
			</Container>
		</>
	);
};

export default MoviePage;
