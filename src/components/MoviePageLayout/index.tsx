import { FC } from 'react';
import BackPageButton from '../BackPageButton';
import { MoviePageHeader, AgeClassification, Genres, GenresSeparator, ImageAndDescriptionContainer, MovieBackdropImage, MovieDetails, MovieInfo, MovieOverview, MovieTagline, MovieTitle, ProductionCompanies, ProductionCompaniesContainer, ReleaseDate, Runtime, OriginCountries } from './styles';
import { Movie } from '../../@types/movie';
import { generateFormatedDate, generateImageURL, generateRuntime } from '../../utils';
import ProductionCompany from '../ProductionCompany';

export const MoviePageLayout: FC<{ movie: Movie }> = ({ movie }) => {
	return (
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

					<OriginCountries>
						<p>Origem</p>
						<span>
							{
								movie?.origin_country.map((item, index) => (
									index > 0
										? ` | ${item}`
										: item
								))
							}
						</span>
					</OriginCountries>

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
				<MovieInfo>
					<MovieOverview>
						{
							movie?.overview
								? (
									<>
										{movie?.overview?.slice(0, 300)}
										{movie?.overview.length > 300 && '...'}
										<div className="see-more">Ver mais</div>
									</>
								)
								: null
						}
					</MovieOverview>
				</MovieInfo>
				<div>
					<MovieBackdropImage src={generateImageURL('w500', movie?.backdrop_path || '')} />
					{/* <div>
						<AddToCollectionButton onClick={openPlaylistModal}>
							Adicionar à coleção
							<IoIosArrowDown />
						</AddToCollectionButton>
						<AddToFavoritesButton onClick={() => addToFavorites()}>
							Adicionar aos favoritos
						</AddToFavoritesButton>
					</div> */}
				</div>
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

			{/* {
				isMoreOptionsItemModalVisible && <MoreOptionsItemModal />
			} */}
		</>
	);
};
