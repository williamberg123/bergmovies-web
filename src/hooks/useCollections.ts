import { useContext } from 'react';

import { CollectionsContext } from '../contexts/CollectionsProvider';
import { CollectionsProviderType } from '../@types/collections';

export const useCollections = () => {
	const context = useContext(CollectionsContext) as CollectionsProviderType;

	return context;
};
