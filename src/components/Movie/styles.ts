import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	width: 180px;
	border-radius: 10px;
	margin: 0 10px;
	position: relative;
	user-select: none;

	&:hover {
		transform: translateY(-10px);
		transition: all ease 0.4s;
	}
`;

export const MoviePoster = styled.img`
	width: 100%;
	border-radius: 10px;
`;

export const HiddenContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 100%;
	height: 100%;
	padding: 10px;
	background-color: rgba(0, 0, 0, 0.5);
	position: absolute;
	top: 0;
	left: 0;
	border-radius: 10px;
	text-align: center;
	opacity: 0;

	&:hover {
		opacity: 1;
		transition-delay: 0.2s;
	}

	& a {
		width: 150px;
		color: ${({ theme }) => theme.colors.white};
		text-decoration: none;
		border: 2px solid ${({ theme }) => theme.colors.white};
		border-radius: 20px;
		padding: 5px 10px;
		font-size: 0.8rem;
		font-weight: 500;
	}

	& a:hover {
		background-color: ${({ theme }) => theme.colors.primary};
		border-color: ${({ theme }) => theme.colors.primary};
	}

	& svg {
		cursor: pointer;
	}
`;

export const MovieName = styled.span`
	color: ${(({ theme }) => theme.colors.white)};
	font-size: 0.8rem;
	font-weight: bold;
`;

export const OptionsContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: ${({ theme }) => theme.colors.white};
`;

export const Options = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	position: absolute;
	padding: 10px;
	bottom: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.9);
	border-radius: 10px;
`;

export const AddToCollectionButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 170px;
	height: 40px;
	border-radius: 50px;
	margin-top: 5px;
	border: 2px solid ${({ theme }) => theme.colors.primary};
	background-color: black;
	color: ${({ theme }) => theme.colors.primary};
	font-size: 0.7rem;
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
	width: 15px;
	height: 15px;
	background-color: transparent;
	border: none;
	color: ${({ theme }) => theme.colors.white};
	margin-bottom: 10px;
	margin-left: auto;

	&:hover {
		color: ${({ theme }) => theme.colors.lightGray};
	}

	& svg {
		width: 100%;
		height: 100%;
	}
`;
