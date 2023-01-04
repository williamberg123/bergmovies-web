import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	padding: 20px;
`;

export const MoviesListTitle = styled.span`
	color: ${({ theme }) => theme.colors.white};
	font-size: 1.8rem;
	font-weight: bold;
`;

export const MoviesContainer = styled.div`
	display: flex;
	overflow-x: hidden;
	margin: 0 0 40px;
	color: white;
	position: relative;
`;

export const Movies = styled.div`
	width: fit-content;
	display: flex;
	align-items: center;
	padding: 30px 0;
	transition: 1s;
`;

export const ArrowLeft = styled.button`
	width: 50px;
	height: 250px;
	background-color: rgba(0, 0, 0, 0.6);
	position: absolute;
	z-index: 5;
	border: none;
	color: ${({ theme }) => theme.colors.white};
	border-radius: 10px;
	cursor: pointer;
	top: calc(50% - 125px);
	left: 0;

	&:hover {
		background-color: black;
	}

	& svg {
		width: 30px;
		height: 30px;
	}
`;

export const ArrowRight = styled(ArrowLeft)`
	left: calc(100% - 50px);
`;
