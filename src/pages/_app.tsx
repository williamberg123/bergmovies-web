import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { store } from '../store';

import { GlobalStyles } from '../styles/global-styles';
import { Theme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<ThemeProvider theme={Theme}>
				<Component {...pageProps} />
				<GlobalStyles />
			</ThemeProvider>
		</Provider>
	);
}

export default MyApp;
