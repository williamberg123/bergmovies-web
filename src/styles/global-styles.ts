import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
		font-family: 'Montserrat', sans-serif;
	}

	body {
		background-color: ${({ theme }) => theme.colors.darkGray};
	}

	ul {
		list-style: none;
	}
`;