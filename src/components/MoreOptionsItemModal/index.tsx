import { FC } from 'react';
import { createPortal } from 'react-dom';
import { SlClose } from 'react-icons/sl';
import { IoIosArrowDown } from 'react-icons/io';

import CollectionsModal from '../CollectionsModal';
import { generateImageURL } from '../../utils';

import { useMoreOptionsItemModal } from '../../hooks/useMoreOptionsItemModal';
import { useFavorites } from '../../hooks/useFavorites';

import {
	AddToCollectionButton, AddToFavoritesButton, CloseOptionsButton, Container, ItemTitle, Modal, ModalHeader, MovieBackdropImage,
} from './styles';

const MoreOptionsItemModal: FC = () => {
	const { isPlaylistModalOpen, closeMoreOptions, openPlaylistModal, item } = useMoreOptionsItemModal();
	const { addToFavorites } = useFavorites();

	const { title, backdrop_path } = item!;

	return createPortal(
		<Container>
			<Modal>
				<ModalHeader>
					<span>Filme</span>
					<CloseOptionsButton onClick={closeMoreOptions}>
						<SlClose />
					</CloseOptionsButton>
				</ModalHeader>
				<ItemTitle>{title}</ItemTitle>
				<MovieBackdropImage src={generateImageURL('w300', backdrop_path || '')} alt={title} />
				<AddToCollectionButton onClick={openPlaylistModal}>
					Adicionar à coleção
					<IoIosArrowDown />
				</AddToCollectionButton>
				<AddToFavoritesButton onClick={() => addToFavorites()}>
					Adicionar aos favoritos
				</AddToFavoritesButton>

				{
					isPlaylistModalOpen && (
						<CollectionsModal item={item!} />
					)
				}
			</Modal>
		</Container>,
		document.body,
	);
};

export default MoreOptionsItemModal;
