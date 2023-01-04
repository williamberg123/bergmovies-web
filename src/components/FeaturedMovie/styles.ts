import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	width: 100%;
	position: relative;
`;

export const ShadowEffectToRight = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	background-image: ${({ theme }) => `linear-gradient(to right, transparent, ${theme.colors.darkGray} 62%)`};
`;

export const ShadowEffectToBottom = styled(ShadowEffectToRight)`
	background-image: ${({ theme }) => `linear-gradient(to bottom, transparent, ${theme.colors.darkGray} 100%)`};
`;

export const BackdropImage = styled.img`
	width: 60%;
`;

export const MovieInfoContainer = styled.div`
	width: 40%;
	display: flex;
	flex-direction: column;
	color: white;
	padding: 10px;
	text-align: center;
	z-index: 100;
`;
export const MovieTitle = styled.span`
	font-weight: bold;
	font-size: 1.3rem;
	color: ${({ theme }) => theme.colors.primary};
`;

export const MovieTagline = styled.span`
	color: ${({ theme }) => theme.colors.lightGray};
	margin-top: 5px;
`;

export const MovieData = styled.div`
	display: flex;
	align-items: center;
	margin: 10px auto 20px;
`;

export const MovieRuntime = styled.span`
	font-size: 0.8rem;
	font-weight: bold;
`;

export const AgeClassification = styled.div`
	width: 25px;
	height: 25px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 0.75rem;
	font-weight: bold;
	border-radius: 5px;
	background-color: ${({ theme }) => theme.colors.secondary};
	margin: 0 20px;
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
	font-size: 0.8rem;
	color: ${({ theme }) => theme.colors.lightGray};
	line-height: 1.5;
`;

export const MovieProductionCompanies = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	margin-top: auto;
`;

export const MovieProductionCompany = styled.img`
	width: 80px;
`;
