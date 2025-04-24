import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { CollectionProps } from '../@types/collections';
import { useCollections } from './useCollections';

export const useCollectionPage = () => {
	const [collection, setCollection] = useState<CollectionProps | null>(null);
	const [isOpenConfigOptions, setIsOpenConfigOptions] = useState(false);
	const [isLoadingPage, setIsLoadingPage] = useState(true);
	const [isOpenRenameCollectionModal, setIsOpenRenameCollectionModal] = useState(false);

	const { query, push } = useRouter();
	const { retrieveCollection, deleteCollection } = useCollections();

	const toggleConfigOptions = () => {
		setIsOpenConfigOptions((s) => !s);
	};

	const retrieveCollectionDetails = async () => {
		try {
			setIsLoadingPage(true);

			if (!query.id) return;

			const collectionDetails = await retrieveCollection(String(query.id));

			if (!collectionDetails) return;

			setCollection(collectionDetails);
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoadingPage(false);
		}
	};

	const onDeleteCollection = async () => {
		try {
			await deleteCollection(String(query.id));

			push('/collections');
		} catch (error) {
			console.log(error);
		}
	};

	const toggleRenameCollectionModal = () => {
		setIsOpenRenameCollectionModal((s) => !s);
	};

	useEffect(() => {
		retrieveCollectionDetails();
	}, [query.id]);

	const context = useMemo(() => ({
		collection, isOpenConfigOptions, isLoadingPage, isOpenRenameCollectionModal, toggleConfigOptions,
		onDeleteCollection, toggleRenameCollectionModal, retrieveCollectionDetails,
	}), [
		collection, isOpenConfigOptions, isLoadingPage, isOpenRenameCollectionModal, toggleConfigOptions,
		onDeleteCollection, toggleRenameCollectionModal, retrieveCollectionDetails,
	]);

	return context;
};
