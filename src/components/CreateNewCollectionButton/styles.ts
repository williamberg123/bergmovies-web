import styled from 'styled-components';

export const Container = styled.div`
    width: 180px;
    height: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border-radius: 20px;
    border: 2px solid ${({ theme }) => theme.colors.mediumGray};
    cursor: pointer;
    color: ${({ theme }) => theme.colors.mediumGray};
    font-weight: 500;
    padding: 20px;
    transition: 0.3s;

    &:hover {
        color: ${({ theme }) => theme.colors.lightGray};
        border-color: ${({ theme }) => theme.colors.lightGray};
    }

    & > svg {
        width: 70px;
        height: 70px;
    }
`;
