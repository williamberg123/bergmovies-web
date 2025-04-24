import styled from 'styled-components';

export const CollectionsPageTitle = styled.span`
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

export const CollectionsContainer = styled.div`
    max-width: 1000px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin: auto;
    padding: 20px;
    gap: 30px;
`;
