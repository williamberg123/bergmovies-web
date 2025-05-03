import { FC, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import BackPageButton from '../BackPageButton';
import { MoviePageHeader, AgeClassification, Genres, GenresSeparator, ImageAndDescriptionContainer, MovieBackdropImage, MovieDetails, MovieInfo, MovieOverview, MovieTagline, MovieTitle, ProductionCompanies, ProductionCompaniesContainer, ReleaseDate, Runtime, OriginCountries } from './styles';
import { Movie } from '../../@types/movie';
import { generateFormatedDate, generateImageURL, generateRuntime } from '../../utils';
import ProductionCompany from '../ProductionCompany';
import { SeeMoreOverview } from './SeeMoreOverview';
import { MoviesList } from '../MoviesList';
import { useMoreOptionsItemModal } from '../../hooks/useMoreOptionsItemModal';
import { useFavorites } from '../../hooks/useFavorites';
import { AddToCollectionButton, AddToFavoritesButton } from '../MoreOptionsItemModal/styles';
import { CollectionItemProps } from '../../@types/collections';
import CollectionsModal from '../CollectionsModal';

export const MoviePageLayout: FC<{ movie: Movie; recommendations: Movie[] | null }> = ({ movie, recommendations }) => {
	const [isOpenSeeMore, setIsOpenSeeMore] = useState(false);

	const { openPlaylistModal, isPlaylistModalOpen } = useMoreOptionsItemModal();
	const { addToFavorites } = useFavorites();

	const toggleSeeMore = () => {
		setIsOpenSeeMore((s) => !s);
	};

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
						{movie?.overview?.slice(0, 300)}
						{
							movie?.overview && movie?.overview.length > 300
								? (
									<>
										{movie?.overview.length > 300 && ' ...'}
										<div
											onClick={toggleSeeMore}
											className="see-more"
											role="navigation"
										>
											Ver mais
										</div>
									</>
								)
								: null
						}
					</MovieOverview>
				</MovieInfo>
				<div>
					<MovieBackdropImage src={generateImageURL('w500', movie?.backdrop_path || '')} />
					<div>
						<AddToCollectionButton onClick={openPlaylistModal}>
							Adicionar à coleção
							<IoIosArrowDown />
						</AddToCollectionButton>
						<AddToFavoritesButton onClick={() => addToFavorites(movie as CollectionItemProps)}>
							Adicionar aos favoritos
						</AddToFavoritesButton>
					</div>
				</div>
			</ImageAndDescriptionContainer>

			<MoviesList title="Semelhantes" items={recommendations} />

			<ProductionCompaniesContainer>
				<span>Produzido por:</span>
				<ProductionCompanies>
					{movie?.production_companies.map((company) => {
						if (!company.logo_path) return;
						return <ProductionCompany {...company} />;
					})}
				</ProductionCompanies>
			</ProductionCompaniesContainer>

			{
				isPlaylistModalOpen && (
					<CollectionsModal item={movie as CollectionItemProps} />
				)
			}

			{
				isOpenSeeMore && (
					<SeeMoreOverview
						title={movie?.title}
						overview={movie?.overview!}
						closeOverview={toggleSeeMore}
					/>
				)
			}
		</>
	);
};
