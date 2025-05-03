import styled from 'styled-components';

export const Background = styled.div`
	width: 100%;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 10;
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 90%;
	height: 95vh;
	background-color: ${({ theme }) => theme.colors.darkGray};
	border-radius: 20px;
	position: fixed;
	top: 2.5vh;
	left: 5%;
	padding: 40px;
	overflow: auto;

	& > svg {
		width: 30px;
		height: 30px;
		color: white;
		position: absolute;
		top: 20px;
		right: 20px;
		cursor: pointer;

		&:hover {
			color: ${({ theme }) => theme.colors.mediumGray};
		}
	}

	&::-webkit-scrollbar {
		width: 20px;
	}

	&::-webkit-scrollbar-track {
		background-color: ${({ theme }) => theme.colors.mediumGray};
	}

	&::-webkit-scrollbar-thumb {
		background-color: ${({ theme }) => theme.colors.primaryLight};
		border-radius: 20px;
	}
`;

export const SeeMoreTitle = styled.h1`
	color: ${({ theme }) => theme.colors.primary};
	font-size: 2.5rem;

	@media (max-width: 700px) {
		font-size: 1.7rem;
	}
`;

export const Overview = styled.span`
	color: white;
	font-size: 1.5rem;
	margin-top: 20px;
	color: ${({ theme }) => theme.colors.lightGray};
	text-indent: 1rem;
	line-height: 2.3rem;

	@media (max-width: 700px) {
		font-size: 1.3rem;
	}
`;
