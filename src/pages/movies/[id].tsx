import { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { AgeClassification, Container, Genres, GenresSeparator, ImageAndDescriptionContainer, MovieBackdropImage, MovieDetails, MovieInfo, MovieOverview, MoviePageHeader, MovieTagline, MovieTitle, ProductionCompanies, ProductionCompaniesContainer, ReleaseDate, Runtime } from '../../styles/pages/moviepage';
import { getData } from '../../services/tmdb';
import { Movie } from '../../@types/movie';
import { generateFormatedDate, generateImageURL, generateRuntime } from '../../utils';
import ProductionCompany from '../../components/ProductionCompany';
import MySkeleton from '../../components/MySkeleton';

const MoviePage: NextPage = () => {
	const [movie, setMovie] = useState<Movie | null>(null);
	const { query } = useRouter();

	const getMovieInfo = async () => {
		const data = await getData(`/movie/${query.id}`);
		setMovie(data);
		console.log(data);
	};

	useEffect(() => {
		getMovieInfo();
		console.log(movie);
	}, []);

	return (
		<Container>
			{
				!movie
					? <MySkeleton />
					: (
						<>
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
														return <span>{name}<GenresSeparator>|</GenresSeparator></span>;
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
	);
};

export default MoviePage;
