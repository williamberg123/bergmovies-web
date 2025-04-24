import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { usePathname } from 'next/navigation';

import { GlobalStyles } from '../styles/global-styles';
import { Theme } from '../styles/theme';
import { AuthProvider } from '../contexts/AuthProvider';
import { isPublicPage } from '../utils';
import { PrivateRoute } from '../components/PrivateRoute';
import Message from '../components/Message';
import { MessageProvider } from '../contexts/MessageProvider';
import CollectionsProvider from '../contexts/CollectionsProvider';
import { MoreOptionsItemProvider } from '../contexts/MoreOptionsItemProvider';
import FavoritesProvider from '../contexts/FavoritesProvider';
import { CurrentPageProvider } from '../contexts/CurrentPageProvider';

function MyApp({ Component, pageProps }: AppProps) {
	const pathname = usePathname();
	const isPublicRoute = isPublicPage(pathname!);

	useEffect(() => {
		// deleteSavedToken('user_token');
	}, []);

	return (
		<ThemeProvider theme={Theme}>
			<AuthProvider>
				<CurrentPageProvider>
					<MessageProvider>
						<CollectionsProvider>
							<MoreOptionsItemProvider>
								<FavoritesProvider>
									{isPublicRoute && <Component {...pageProps} />}
									{!isPublicRoute && (
										<PrivateRoute>
											<Component {...pageProps} />
										</PrivateRoute>
									)}
								</FavoritesProvider>
								<Message />
							</MoreOptionsItemProvider>
						</CollectionsProvider>
					</MessageProvider>
				</CurrentPageProvider>
			</AuthProvider>
			<GlobalStyles />
		</ThemeProvider>
	);
}

export default MyApp;
