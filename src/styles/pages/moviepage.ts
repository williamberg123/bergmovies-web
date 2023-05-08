import styled from 'styled-components';

export const Container = styled.div`

`;

export const MoviePageHeader = styled.div`
    display: flex;
    flex-direction: column;
`;

export const MovieTitle = styled.span`
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.9rem;
    font-weight: bold;
    margin: 20px 20px 5px;
`;

export const MovieTagline = styled.span`
    color: ${({ theme }) => theme.colors.lightGray};
    font-size: 1.2rem;
    font-weight: 300;
    margin: 0 20px;
`;

export const ImageAndDescriptionContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 20px;
`;

export const MovieBackdropImage = styled.img`
    display: flex;
    border-radius: 10px;
`;

export const MovieInfo = styled.div`
    display: flex;
    height: inherit;
    flex-direction: column;
    justify-content: space-between;
`;

export const MovieOverview = styled.span`
    color: ${({ theme }) => theme.colors.lightGray};
    font-size: 1.2rem;
    padding: 20px;
    line-height: 2rem;
`;

export const MovieDetails = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px 20px;
    margin-top: 20px;
`;

export const AgeClassification = styled.span<{ isAdult: boolean | undefined }>`
    display: flex;
    flex-direction: column;
    align-items: center;

    & > p {
        font-size: 0.9rem;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.mediumGray};
        margin-bottom: 5px;
    }

    & > span {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 25px;
        height: 25px;
        border-radius: 5px;
        font-weight: bold;
        font-size: 0.7rem;
        color: ${({ theme }) => theme.colors.white};
        background-color: ${({ isAdult, theme }) => isAdult ? theme.colors.primary : theme.colors.secondary};
    }
`;

export const Runtime = styled.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${({ theme }) => theme.colors.white};
    font-weight: bold;
    font-size: 0.9rem;

    & > p {
        font-size: 0.9rem;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.mediumGray};
        margin-bottom: 5px;
    }
`;

export const ReleaseDate = styled.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${({ theme }) => theme.colors.white};
    font-weight: bold;
    font-size: 0.9rem;

    & > p {
        font-size: 0.9rem;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.mediumGray};
        margin-bottom: 5px;
    }
`;

export const Genres = styled.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${({ theme }) => theme.colors.white};
    font-weight: bold;
    font-size: 0.8rem;

    & > p {
        font-size: 0.9rem;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.mediumGray};
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
