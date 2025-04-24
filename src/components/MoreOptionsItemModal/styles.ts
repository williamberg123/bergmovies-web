import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.7);
`;

export const Modal = styled.div`
	width: 400px;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;
	border-radius: 10px;
    background-color: #111;
	position: relative;
`;

export const ModalHeader = styled.span`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 10px;

	& > span {
		color: ${({ theme }) => theme.colors.mediumGray};
		font-weight: 500;
	}
`;

export const ItemTitle = styled.span`
	color: ${({ theme }) => theme.colors.white};
	margin: 10px 0 20px;
	font-weight: bold;
`;

export const MovieBackdropImage = styled.img`
	border-radius: 10px;
	margin-bottom: 20px;
`;

export const AddToCollectionButton = styled.button`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 50px;
	border-radius: 50px;
	margin-top: 10px;
	border: 2px solid ${({ theme }) => theme.colors.primary};
	background-color: #111;
	color: ${({ theme }) => theme.colors.primary};
	font-size: 0.8rem;
	font-weight: bold;
	cursor: pointer;

	& svg {
		margin-left: 5px;
		width: 15px;
		height: 15px;
	}

	&:hover {
		background-color: ${({ theme }) => theme.colors.primary};
		color: ${({ theme }) => theme.colors.white};
	}
`;

export const AddToFavoritesButton = styled(AddToCollectionButton)`
	border-color: ${({ theme }) => theme.colors.secondary};
	color: ${({ theme }) => theme.colors.secondary};

	&:hover {
		background-color: ${({ theme }) => theme.colors.secondary};
		color: ${({ theme }) => theme.colors.white};
	}
`;

export const CloseOptionsButton = styled.button`
	width: 20px;
	height: 20px;
	background-color: transparent;
	border: none;
	color: ${({ theme }) => theme.colors.white};
	margin-left: auto;
	cursor: pointer;

	&:hover {
		color: ${({ theme }) => theme.colors.lightGray};
	}

	& svg {
		width: 100%;
		height: 100%;
	}
`;
