import styled from 'styled-components';

export const FavoritesListContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding: 20px;
`;

export const FavoritesPageTitle = styled.span`
    display: flex;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.darkGray};
    font-weight: bold;
    font-size: 2rem;
    padding: 20px;
    position: sticky;
    top: 0;
    z-index: 3;
`;
