import { createContext, ReactNode, useMemo, useState } from 'react';

import { Movie } from '../@types/movie';
import { CollectionItemProps } from '../@types/collections';

export const MoreOptionsItemContext = createContext({});

export interface MoreOptionsItemProviderType {
	item: CollectionItemProps | null;
	// eslint-disable-next-line
	changeItem: (selectedItem: Movie) => void;
	clearItem: () => void;
	// eslint-disable-next-line
	isPlaylistModalOpen: boolean;
	openPlaylistModal: () => void;
	closePlaylistModal: () => void;
	isMoreOptionsItemModalVisible: boolean;
	// eslint-disable-next-line
	openMoreOptions: (selectedItem: Movie) => void;
	closeMoreOptions: () => void;
}

export const MoreOptionsItemProvider = ({ children }: { children: ReactNode }) => {
	const [item, setItem] = useState<Movie | null>(null);
	const [isMoreOptionsItemModalVisible, setIsMoreOptionsItemModalVisible] = useState(false);
	const [isPlaylistModalOpen, setIsPlaylistModalOpen] = useState(false);

	const clearItem = () => {
		setItem(null);
	};

	const openMoreOptions = (selectedItem: Movie) => {
		setItem(selectedItem);
		setIsMoreOptionsItemModalVisible(true);
	};

	const closeMoreOptions = () => {
		setIsMoreOptionsItemModalVisible(false);
	};

	const openPlaylistModal = () => {
		setIsPlaylistModalOpen(true);
	};

	const closePlaylistModal = () => {
		setIsPlaylistModalOpen(false);
	};

	const context = useMemo(() => ({
		item, clearItem, isPlaylistModalOpen, openPlaylistModal, closePlaylistModal, isMoreOptionsItemModalVisible,
		openMoreOptions, closeMoreOptions,
	}), [
		item, clearItem, isPlaylistModalOpen, openPlaylistModal, closePlaylistModal, isMoreOptionsItemModalVisible,
		openMoreOptions, closeMoreOptions,
	]);

	return (
		<MoreOptionsItemContext.Provider value={context}>
			{children}
		</MoreOptionsItemContext.Provider>
	);
};
