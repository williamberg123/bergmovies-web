import Head from 'next/head';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { BsThreeDotsVertical } from 'react-icons/bs';

import CollectionItem from '../../../components/CollectionItem';
import BackPageButton from '../../../components/BackPageButton';
import RenameCollectionModal from '../../../components/RenameCollectionModal';
import FirstPageLoading from '../../../components/FirstPageLoading';
import NoData from '../../../components/NoData';

import { HomePageContainer } from '../../../styles/pages/home';
import {
	CollectionPageHeader, CollectionTitle, CollectionsListContainer, ConfigOptions, ConfigOptionsButton, ConfigOptionsItem, DeleteCollectionButton,
} from '../../../styles/pages/collection-page';

import { useCollectionPage } from '../../../hooks/useCollectionPage';
import { useAuth } from '../../../hooks/useAuth';

const CollectionPage: NextPage = () => {
	const {
		collection, isLoadingPage, isOpenConfigOptions, isOpenRenameCollectionModal, onDeleteCollection,
		toggleConfigOptions, toggleRenameCollectionModal, retrieveCollectionDetails,
	} = useCollectionPage();

	const { user } = useAuth();
	const { push } = useRouter();

	if (!!collection && collection?.owner_id !== user.id) {
		push('/collections');
		return <NoData message="Página indisponivel" size="1.5rem" />;
	}

	if (isLoadingPage) {
		return (
			<FirstPageLoading />
		);
	}

	return (
		<>
			<Head>
				<title>Coleção {collection?.title && `| ${collection.title}`}</title>
			</Head>
			<HomePageContainer>
				<BackPageButton />
				<CollectionPageHeader>
					<CollectionTitle>{collection?.title}</CollectionTitle>
					<ConfigOptionsButton isOpenConfigOptions={isOpenConfigOptions} onClick={toggleConfigOptions}>
						<BsThreeDotsVertical size={20} />

						{
							isOpenConfigOptions && (
								<ConfigOptions>
									<ConfigOptionsItem onClick={toggleRenameCollectionModal}>Renomear coleção</ConfigOptionsItem>
									<ConfigOptionsItem>Remover itens</ConfigOptionsItem>
									<DeleteCollectionButton onClick={onDeleteCollection}>Excluir coleção</DeleteCollectionButton>
								</ConfigOptions>
							)
						}
					</ConfigOptionsButton>
				</CollectionPageHeader>
				<CollectionsListContainer>
					{
						collection && collection.items_list.map((item) => <CollectionItem key={`item-${item.id}`} {...item} />)
					}
					{
						!collection?.items_list.length && (
							<NoData message="Nenhum item nesta coleção" size="1.4rem" />
						)
					}
				</CollectionsListContainer>

				{
					isOpenRenameCollectionModal && (
						<RenameCollectionModal
							currentTitle={collection?.title!}
							toggleRenameCollectionModal={toggleRenameCollectionModal}
							retrieveCollectionDetails={retrieveCollectionDetails}
							id={collection?.id!}
						/>
					)
				}
			</HomePageContainer>
		</>
	);
};

export default CollectionPage;
