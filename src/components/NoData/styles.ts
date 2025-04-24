import styled from 'styled-components';

export const Container = styled.span<{ size: string }>`
    color: ${({ theme }) => theme.colors.mediumGray};
    font-size: ${({ size }) => size};
    margin: 20px 0;
`;
