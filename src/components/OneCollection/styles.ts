import styled from 'styled-components';

export const Container = styled.div`
    width: 180px;
    height: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border-radius: 30px;
    border: 2px solid ${({ theme }) => theme.colors.white};
    cursor: pointer;
    color: ${({ theme }) => theme.colors.white};
    padding: 20px;
    transition: 0.3s;

    &:hover {
        color: ${({ theme }) => theme.colors.primaryLight};
        border-color: ${({ theme }) => theme.colors.primaryLight};
    }
`;

export const CollectionTitle = styled.span`
    text-align: center;
    font-weight: 500;
`;

export const NumberItems = styled.span`
    font-weight: bold;
`;
