import styled from 'styled-components';

export const Container = styled.div`
    width: fit-content;
    display: flex;
    flex-direction: column;
    position: relative;
    transform: scale(0.9);
    transition: 0.3s;

    &:hover {
        transform: scale(1);
        & > button {
            display: flex;
        }
    }
`;

export const FavoriteItemTitle = styled.span`
    width: 100%;
    color: ${({ theme }) => theme.colors.white};
    font-weight: bold;
    font-size: 0.7rem;
    background-color: rgba(0, 0, 0, 0.6);
    position: absolute;
    text-align: center;
    padding: 10px 5px;
    border-radius: 20px 20px 0 0;

	@media (max-width: 700px) {
		font-size: 0.5rem;
	}
`;

export const FavoriteItemImage = styled.img`
    border-radius: 20px;
`;

export const RemoveFromFavoritesButton = styled.button`
    display: none;
    width: fit-content;
    position: absolute;
    bottom: 10px;
    right: 10px;
    padding: 5px 10px;
    border-radius: 20px;
    color: ${({ theme }) => theme.colors.primary};
    background-color: rgba(0, 0, 0, 0.6);
    border: 2px solid ${({ theme }) => theme.colors.primary};
    font-weight: bold;
    font-size: 0.7rem;
    cursor: pointer;

    &:hover {
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.white};
    }
`;
