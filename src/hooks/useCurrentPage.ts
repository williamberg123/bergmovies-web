import { useContext } from 'react';
import { CurrentPageContext, CurrentPageProviderType } from '../contexts/CurrentPageProvider';

export const useCurrentPage = () => {
	const context = useContext(CurrentPageContext) as CurrentPageProviderType;

	return context;
};
