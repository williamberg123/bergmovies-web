import styled from 'styled-components';

export const MoviePageHeader = styled.div`
    display: flex;
    flex-direction: column;

	@media (max-width: 700px) {
		align-items: center;
	}
`;

export const MovieTitle = styled.span`
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.9rem;
    font-weight: bold;
    margin: 20px 20px 5px;

	@media (max-width: 700px) {
		font-size: 1.4rem;
	}
`;

export const MovieTagline = styled.span`
    color: ${({ theme }) => theme.colors.lightGray};
    font-size: 1.2rem;
    font-weight: 300;
    margin: 0 20px;

	@media (max-width: 700px) {
		font-size: 1rem;
	}
`;

export const ImageAndDescriptionContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 20px;

	@media (max-width: 1000px) {
		flex-direction: column-reverse;
	}
`;

export const MovieBackdropImage = styled.img`
    display: flex;
    border-radius: 10px;

	@media (max-width: 600px) {
		width: 100%;
	}
`;

export const MovieInfo = styled.div`
    display: flex;
    height: inherit;
    flex-direction: column;
    justify-content: space-between;
	margin-top: 30px;
`;

export const MovieOverview = styled.span`
    color: ${({ theme }) => theme.colors.lightGray};
    font-size: 1.2rem;
    padding: 20px;
    line-height: 2rem;

	& > .see-more {
		display: inline;
		width: fit-content;
		height: fit-content;
		padding: 3px 10px;
		font-size: 0.7rem;
		border-radius: 20px;
		color: ${({ theme }) => theme.colors.primary};
		border: 1px solid ${({ theme }) => theme.colors.primary};
		cursor: pointer;
		margin-left: 5px;

		&:hover {
			background-color: ${({ theme }) => theme.colors.primary};
			color: white;
		}
	}

	@media (max-width: 600px) {
		font-size: 1rem;
	}
`;

export const MovieDetails = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px 20px;
    margin-top: 20px;
	flex-wrap: wrap;
	gap: 20px;
`;

export const AgeClassification = styled.span<{ isAdult: boolean | undefined }>`
    display: flex;
    flex-direction: column;
    align-items: center;

    & > p {
        font-size: 0.7rem;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.lightGray};
        margin-bottom: 5px;
    }

    & > span {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 20px;
        height: 20px;
        border-radius: 5px;
        font-weight: bold;
        font-size: 0.6rem;
        color: ${({ theme }) => theme.colors.white};
        background-color: ${({ isAdult, theme }) => isAdult ? theme.colors.primary : theme.colors.secondary};
    }
`;

export const OriginCountries = styled.span`
	display: flex;
    flex-direction: column;
    align-items: center;
    color: ${({ theme }) => theme.colors.white};
    font-weight: bold;
    font-size: 0.7rem;

	& > p {
        font-size: 0.7rem;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.lightGray};
        margin-bottom: 5px;
    }
`;

export const Runtime = styled.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${({ theme }) => theme.colors.white};
    font-weight: bold;
	font-size: 0.7rem;

    & > p {
        font-size: 0.7rem;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.lightGray};
        margin-bottom: 5px;
    }
`;

export const ReleaseDate = styled.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${({ theme }) => theme.colors.white};
    font-weight: bold;
    font-size: 0.7rem;

    & > p {
        font-size: 0.7rem;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.lightGray};
        margin-bottom: 5px;
    }
`;

export const Genres = styled.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${({ theme }) => theme.colors.white};
    font-weight: bold;
    font-size: 0.7rem;

    & > p {
        font-size: 0.7rem;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.lightGray};
        margin-bottom: 5px;
    }

    & > span {
        display: flex;
        align-items: center;
        text-transform: uppercase;
    }
`;

export const GenresSeparator = styled.span`
    margin: 0 7px;
`;

export const ProductionCompaniesContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px;

    & > span {
        color: ${({ theme }) => theme.colors.white};
        font-weight: bold;
        font-size: 1.7rem;
    }
`;

export const ProductionCompanies = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 40px;
`;
