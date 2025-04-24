import { useEffect } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import { Header } from '../../components/Header';
import CreateNewCollectionButton from '../../components/CreateNewCollectionButton';
import OneCollection from '../../components/OneCollection';
import NewCollectionModal from '../../components/NewCollectionModal';

import { useCollections } from '../../hooks/useCollections';
import { useMoreOptionsItemModal } from '../../hooks/useMoreOptionsItemModal';

import { CollectionsContainer, CollectionsPageTitle } from '../../styles/pages/collections';
import { HomePageContainer } from '../../styles/pages/home';
import { useCurrentPage } from '../../hooks/useCurrentPage';
import FirstPageLoading from '../../components/FirstPageLoading';

const Collections: NextPage = () => {
	const { collections, openNewCollectionModal, isNewCollectionModalVisible, isLoading } = useCollections();
	const { clearItem } = useMoreOptionsItemModal();
	const { changePage } = useCurrentPage();

	useEffect(() => {
		clearItem();
		changePage('collections');
	}, []);

	if (isLoading) {
		return <FirstPageLoading />;
	}

	return (
		<>
			<Head>
				<title>Coleções</title>
			</Head>
			<HomePageContainer>
				<Header />
				<CollectionsPageTitle>Suas coleções</CollectionsPageTitle>
				<CollectionsContainer>
					<CreateNewCollectionButton openModal={openNewCollectionModal} />
					{
						collections.map((c) => <OneCollection key={`collection${c.id}`} {...c} />)
					}
				</CollectionsContainer>
			</HomePageContainer>

			{
				(isNewCollectionModalVisible && !isLoading) && <NewCollectionModal />
			}
		</>
	);
};

export default Collections;
