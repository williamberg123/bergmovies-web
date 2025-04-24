import { useContext } from 'react';
import { MoreOptionsItemContext, MoreOptionsItemProviderType } from '../contexts/MoreOptionsItemProvider';

export const useMoreOptionsItemModal = () => {
	const context = useContext(MoreOptionsItemContext) as MoreOptionsItemProviderType;

	return context;
};
