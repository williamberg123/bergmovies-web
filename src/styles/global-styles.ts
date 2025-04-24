import { createGlobalStyle } from 'styled-components';
import { ThemeProps } from './theme';

export const GlobalStyles = createGlobalStyle`
	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
		font-family: 'Montserrat', sans-serif;
	}

	body {
		background-color: ${({ theme }: { theme: ThemeProps }) => theme.colors.darkGray};
	}

	body::-webkit-scrollbar {
		width: 20px;
	}

	body::-webkit-scrollbar-track {
		background-color: ${({ theme }) => theme.colors.mediumGray};
	}

	body::-webkit-scrollbar-thumb {
		background-color: ${({ theme }) => theme.colors.primaryLight};
		border-radius: 20px;
	}

	ul {
		list-style: none;
	}
`;
