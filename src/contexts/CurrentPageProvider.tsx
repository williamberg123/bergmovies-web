import { createContext, ReactNode, useMemo, useState } from 'react';

export const CurrentPageContext = createContext({});

export type PageType = 'movies' | 'series' | 'collections' | 'favorites' | 'profile'

export interface CurrentPageProviderType {
	currentPage: PageType;
	// eslint-disable-next-line
	changePage: (page: PageType) => void;
}

export const CurrentPageProvider = ({ children }: {children: ReactNode}) => {
	const [currentPage, setCurrentPage] = useState('movies');

	const changePage = (page: PageType) => setCurrentPage(page);

	const context = useMemo(() => ({
		currentPage, changePage,
	}), [currentPage, changePage]);

	return (
		<CurrentPageContext.Provider value={context}>
			{children}
		</CurrentPageContext.Provider>
	);
};
