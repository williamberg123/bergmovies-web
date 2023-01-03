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
	margin: 20px 0 40px;
	padding-left: 40px;
`;

export const Movies = styled.div`
	width: fit-content;
	display: flex;
	align-items: center;
	padding-top: 30px;
`;
