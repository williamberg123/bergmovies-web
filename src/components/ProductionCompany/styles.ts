import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const CompanyImage = styled.img``;

export const CompanyName = styled.span`
    margin-top: 20px;
    color: ${({ theme }) => theme.colors.lightGray};
    font-weight: 500;
    font-size: 1.2rem;
`;
