import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	width: 100%;
	position: relative;

	@media (max-width: 900px) {
		flex-direction: column;
	}
`;

export const ShadowEffectToRight = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	background-image: ${({ theme }) => `linear-gradient(to right, transparent, ${theme.colors.darkGray} 60%)`};
`;

export const ShadowEffectToBottom = styled(ShadowEffectToRight)`
	background-image: ${({ theme }) => `linear-gradient(to bottom, transparent, ${theme.colors.darkGray} 100%)`};
`;

export const BackdropImageContainer = styled.div`
	width: 60%;
	aspect-ratio: 16/9;
	position: relative;

	@media (max-width: 900px) {
		width: 100%;
	}
`;

export const BackdropImage = styled.img`
	width: 100%;
	top: 0;
`;

export const MovieInfoContainer = styled.div`
	width: 40%;
	display: flex;
	flex-direction: column;
	color: white;
	padding: 10px;
	text-align: center;
	z-index: 5;

	@media (max-width: 900px) {
		width: 100%;
	}
`;

export const SeeDetails = styled(Link)`
	width: 300px;
	margin: 0 auto;
	padding: 10px;
	color: ${({ theme }) => theme.colors.primary};
	border: 2px solid ${({ theme }) => theme.colors.primary};
	border-radius: 50px;
	text-decoration: none;
	font-weight: 500;
	margin-top: auto;

	&:hover {
		background-color: ${({ theme }) => theme.colors.primary};
		color: ${({ theme }) => theme.colors.white};
	}

	@media (max-width: 900px) {
		margin-top: 40px;
	}
`;

export const MovieTitle = styled.span`
	font-weight: bold;
	font-size: 1.4rem;
	color: ${({ theme }) => theme.colors.primary};
`;

export const MovieTagline = styled.span`
	font-size: 0.8rem;
	color: ${({ theme }) => theme.colors.lightGray};
	margin-top: 5px;
`;

export const MovieData = styled.div`
	display: flex;
	align-items: center;
	margin: 20px auto;
`;

export const MovieRuntime = styled.span`
	font-size: 0.8rem;
	font-weight: bold;
`;

export const MovieVoteAverage = styled.span`
	display: flex;
	align-items: center;
	font-size: 0.8rem;
	font-weight: bold;

	& svg {
		color: #efe700;
	}
`;

export const MovieOverview = styled.span`
	max-width: 450px;
	font-size: 0.9rem;
	color: ${({ theme }) => theme.colors.lightGray};
	line-height: 1.5;
	margin: 0 auto;
`;

export const Genres = styled.span`
	font-size: 0.8rem;
	color: ${({ theme }) => theme.colors.lightGray};
	margin: 0 20px;
	font-weight: 500;
`;

export const NowPlaying = styled.span`
	display: flex;
	align-items: center;
	position: absolute;
	top: 20px;
	left: 20px;
	color: ${({ theme }) => theme.colors.white};
	font-weight: bold;
	text-shadow: 2px 2px 8px black;
	z-index: 10;

	& svg {
		width: 20px;
		height: 20px;
		margin-left: 5px;
	}

	@media (max-width: 600px) {
		top: 10px;
		left: 10px;
	}
`;
