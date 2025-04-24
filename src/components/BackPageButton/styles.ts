import styled from 'styled-components';

export const Container = styled.button`
    display: flex;
    align-items: center;
    padding: 5px 10px;
    border-radius: 20px;
    font-weight: bold;
    border: 2px solid ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.darkGray};
    color: ${({ theme }) => theme.colors.white};
    margin: 20px auto 10px 20px;
    cursor: pointer;

    & > svg {
        margin-right: 5px;
    }

    &:hover {
        color: ${({ theme }) => theme.colors.lightGray};
        border-color: ${({ theme }) => theme.colors.lightGray};
    }
`;
