import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled(Link)`
    width: 200px;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    border-radius: 10px;

    &:hover > img {
        transform: scale(1.1);
        transition: 0.3s;
    }
`;

export const ItemImage = styled.img`
    border-radius: 10px;
    cursor: pointer;
`;

export const HiddenContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 3;
    border-radius: 10px;
    cursor: pointer;
    opacity: 0%;
    transition: 0.3s;
    padding: 10px;

    &:hover {
        opacity: 100%;
    }
`;

export const ItemTitle = styled.span`
    color: ${({ theme }) => theme.colors.white};
    font-weight: bold;
    font-size: 0.8rem;
    text-align: center;
    margin-bottom: 10px;
`;
