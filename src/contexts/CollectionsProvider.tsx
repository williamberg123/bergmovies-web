import { createContext, ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import { isAxiosError } from 'axios';

import { FieldValues } from 'react-hook-form';
import { useAuth } from '../hooks/useAuth';
import { useMessage } from '../hooks/useMessage';

import { addOnCollection, createNewCollection, createNewCollectionAndAddItem, deleteOneCollection, renameCollectionTitle, retrieveAllUserCollections, retrieveCollectionDetails } from '../services/api/collection';
import { CollectionItemProps, CollectionProps, CollectionsProviderType } from '../@types/collections';

export const CollectionsContext = createContext({});

export default function CollectionsProvider({ children }: { children: ReactNode }) {
	const [collections, setCollections] = useState<CollectionProps[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isNewCollectionModalVisible, setIsNewCollectionModalVisible] = useState(false);

	const { user, token } = useAuth();
	const { newMessage } = useMessage();

	const retrieveAllCollections = useCallback(async () => {
		try {
			setIsLoading(true);

			const userCollections = await retrieveAllUserCollections(user?.id, token);

			if (!userCollections) return;

			setCollections(userCollections);
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	}, [user?.id, token, retrieveAllUserCollections]);

	const retrieveCollection = async (collection_id: string): Promise<CollectionProps | undefined> => {
		try {
			const collection = await retrieveCollectionDetails(collection_id, token);

			return collection;
		} catch (error) {
			console.log(error);
		}
	};

	const addItemOnCollection = async (collection_id: string, collection_name: string, item: CollectionItemProps) => {
		try {
			await addOnCollection({ collection_id, item, token });

			newMessage(`${item.type === 'movie' ? 'Filme adicionado' : 'Série adicionada'} à coleção "${collection_name}"`, 'success');
		} catch (error) {
			console.log(error);

			if (!isAxiosError(error)) return;

			if (error.response?.data.message === 'item is already on the list') {
				newMessage(`${item.type === 'movie' ? 'Este filme' : 'Esta série'} já se encontra na coleção`, 'error');
			}
		}
	};

	const addNewCollectionOnList = (newCollection: CollectionProps) => {
		setCollections((s) => [...s, newCollection]);
	};

	const closeNewCollectionModal = () => {
		setIsNewCollectionModalVisible(false);
	};

	const createCollection = async (data: FieldValues) => {
		try {
			const newCollection = await createNewCollection(data, { user, token });

			if (!newCollection) return;

			addNewCollectionOnList(newCollection);
			newMessage('Nova coleção criada com sucesso', 'success');
			closeNewCollectionModal();
			// eslint-disable-next-line
		} catch { }
	};

	const createCollectionAndAddItem = async (data: FieldValues, item: CollectionItemProps) => {
		try {
			const newCollection = await createNewCollectionAndAddItem(data, {
				item, token, owner_id: user?.id,
			});

			if (!newCollection) return;

			addNewCollectionOnList(newCollection);
			newMessage('Item adicionado a nova coleção', 'success');
			closeNewCollectionModal();
		} catch (error) {
			console.log(error);
		}
	};

	const renameCollection = async (collection_id: string, new_title: string) => {
		try {
			await renameCollectionTitle(collection_id, new_title, token);
		} catch (error) {
			console.log(error);
		}
	};

	const deleteCollection = async (collection_id: string) => {
		try {
			console.log('collection_id', collection_id);
			await deleteOneCollection(collection_id, token);
			retrieveAllCollections();

			newMessage('Coleção deletada com sucesso', 'success');
		} catch (error) {
			console.log(error);
		}
	};

	const openNewCollectionModal = () => {
		setIsNewCollectionModalVisible(true);
	};

	useEffect(() => {
		if (!user?.id) return;

		retrieveAllCollections();
	}, [retrieveAllCollections, user]);

	const context = useMemo(() => ({
		collections, isNewCollectionModalVisible, addNewCollectionOnList, openNewCollectionModal,
		closeNewCollectionModal, addItemOnCollection, isLoading, createCollection, createCollectionAndAddItem,
		deleteCollection, retrieveCollection, renameCollection,
	}), [
		collections, isNewCollectionModalVisible, addNewCollectionOnList, openNewCollectionModal,
		closeNewCollectionModal, addItemOnCollection, isLoading, createCollection, createCollectionAndAddItem,
		deleteCollection, retrieveCollection, renameCollection,
	]) as CollectionsProviderType;

	return (
		<CollectionsContext.Provider value={context}>
			{children}
		</CollectionsContext.Provider>
	);
}
