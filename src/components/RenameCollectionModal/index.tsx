import { FC } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { CancelButton, ConfirmCollectionRenamingButton, Container, Modal, NewTitleInput, Title } from './styles';
import { Form } from '../Form';
import { useAuth } from '../../hooks/useAuth';
import { useCollections } from '../../hooks/useCollections';

interface RenameCollectionModalProps {
	currentTitle: string;
	toggleRenameCollectionModal: () => void;
	retrieveCollectionDetails: () => void;
	id: string;
}

const RenameCollectionModal: FC<RenameCollectionModalProps> = ({ currentTitle, toggleRenameCollectionModal, id, retrieveCollectionDetails }) => {
	const { handleSubmit, register } = useForm();
	const { token } = useAuth();
	const { renameCollection } = useCollections();

	const renameCollectionTitle = async (data: FieldValues) => {
		try {
			await renameCollection(id, data.new_title, token);

			toggleRenameCollectionModal();
			retrieveCollectionDetails();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Container>
			<Form func={handleSubmit(renameCollectionTitle)}>
				<Modal>
					<Title>Novo título</Title>
					<NewTitleInput
						{...register('new_title', { required: true, value: currentTitle })}
						placeholder="insira o novo título"
					/>
					<ConfirmCollectionRenamingButton type="submit">Renomear coleção</ConfirmCollectionRenamingButton>
					<CancelButton onClick={toggleRenameCollectionModal}>Cancelar</CancelButton>
				</Modal>
			</Form>
		</Container>
	);
};

export default RenameCollectionModal;
