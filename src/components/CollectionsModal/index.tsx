import { FC } from 'react';
import { CgCloseO } from 'react-icons/cg';
import { HiPlusCircle } from 'react-icons/hi';
import { isAxiosError } from 'axios';

import { CollectionItemProps } from '../../@types/collections';

import { useCollections } from '../../hooks/useCollections';
import { useMessage } from '../../hooks/useMessage';
import { useMoreOptionsItemModal } from '../../hooks/useMoreOptionsItemModal';

import {
	AddCollectionButton, CloseCollectionsModal, CollectionsModalTitle, Container, CreateNewCollectionButton, YourCollectionsTitle,
} from './styles';

interface CollectionsModalProps {
	// eslint-disable-next-line
	item: CollectionItemProps;
}

const CollectionsModal: FC<CollectionsModalProps> = ({ item }) => {
	const { collections, isLoading, addItemOnCollection, openNewCollectionModal } = useCollections();
	const { closePlaylistModal, closeMoreOptions } = useMoreOptionsItemModal();

	const { newMessage } = useMessage();
	const addOnCollection = async (c_id: string, collection_name: string) => {
		try {
			await addItemOnCollection(c_id, collection_name, item);

			closePlaylistModal();
			closeMoreOptions();
			newMessage(`
				    ${item.type === 'movie' ? 'Filme adicionado' : 'Série adicionada'} à coleção "${collection_name}"
				`, 'success');
		} catch (error) {
			console.log(error);

			if (!isAxiosError(error)) return;

			if (error.response?.data.message === 'item is already on the list') {
				newMessage(`${item.type === 'movie' ? 'Este filme' : 'Esta série'} já se encontra na coleção`, 'error');
			}
		}
	};

	const openNewCollectionModalAndClose = () => {
		closeMoreOptions();
		closePlaylistModal();
		openNewCollectionModal();
	};

	return (
		<Container>
			<CloseCollectionsModal>
				<CgCloseO onClick={() => closePlaylistModal()} color="red" />
			</CloseCollectionsModal>
			<CollectionsModalTitle>Criar uma nova?</CollectionsModalTitle>
			<CreateNewCollectionButton onClick={openNewCollectionModalAndClose}>
				<HiPlusCircle size={20} />
				Criar nova coleção
			</CreateNewCollectionButton>

			<YourCollectionsTitle>Suas coleções</YourCollectionsTitle>

			{
				isLoading && <p>Carregando...</p>
			}

			{
				collections && (
					collections.map(({ title, id }) => <AddCollectionButton onClick={() => addOnCollection(id, title)}>{title}</AddCollectionButton>)
				)
			}
		</Container>
	);
};

export default CollectionsModal;
