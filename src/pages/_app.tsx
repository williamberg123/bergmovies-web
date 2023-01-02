import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '../styles/global-styles';
import { Theme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={Theme}>
			<Component {...pageProps} />
			<GlobalStyles />
		</ThemeProvider>
	);
}

export default MyApp;
