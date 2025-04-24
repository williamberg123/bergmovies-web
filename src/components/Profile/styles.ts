import styled from 'styled-components';

export const Container = styled.div`
	width: 40px;
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	border: 2px solid ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.primary};
	font-size: 0.8rem;
	font-weight: bold;
	cursor: pointer;

	& > a {
		text-decoration: none;
		width: inherit;
		height: inherit;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		color: ${({ theme }) => theme.colors.primary};
	}

	& > a.page {
		background-color: ${({ theme }) => theme.colors.primary};
		color: ${({ theme }) => theme.colors.white};
	}


	&:hover {
		background-color: ${({ theme }) => theme.colors.primary};

		a {
			background-color: ${({ theme }) => theme.colors.primary};
			color: ${({ theme }) => theme.colors.white};
		}
	}
`;
