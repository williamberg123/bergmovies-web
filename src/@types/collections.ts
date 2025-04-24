import { FieldValues } from 'react-hook-form';
import { Movie } from './movie';

export interface CollectionItemProps extends Movie {
	id: string;
	type: 'movie' | 'serie';
	poster_path: string;
	title: string;
}

export interface CollectionProps {
	id: string;
	owner_id: string;
	title: string;
	items_list: CollectionItemProps[];
}

export interface CollectionsProviderType {
	collections: CollectionProps[];
	isNewCollectionModalVisible: boolean;
	isLoading: boolean;
	// eslint-disable-next-line
	retrieveCollection: (collection_id: string) => Promise<CollectionProps | undefined>;
	// eslint-disable-next-line
	addNewCollectionOnList: (newCollection: CollectionProps) => void;
	openNewCollectionModal: () => void;
	closeNewCollectionModal: () => void;
	// eslint-disable-next-line
	addItemOnCollection: (c_id: string, collection_name: string, item: CollectionItemProps) => void;
	// eslint-disable-next-line
	createCollection: (data: FieldValues) => void;
	// eslint-disable-next-line
	createCollectionAndAddItem: (data: FieldValues, item: CollectionItemProps) => void;
	// eslint-disable-next-line
	deleteCollection: (collection_id: string) => void;
	// eslint-disable-next-line
	renameCollection: (c_id: string, new_title: string, token: string) => void;
}
