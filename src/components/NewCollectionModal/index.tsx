import { FC } from 'react';
import { createPortal } from 'react-dom';
import { FieldValues, useForm } from 'react-hook-form';

import { Form } from '../Form';

import { useCollections } from '../../hooks/useCollections';
import { CancelButton, Container, Modal, SaveNewCollectionButton, Title, TitleInput } from './styles';
import { useMoreOptionsItemModal } from '../../hooks/useMoreOptionsItemModal';

const NewCollectionModal: FC = () => {
	const { register, handleSubmit } = useForm();
	const { closeNewCollectionModal, collections, createCollection, createCollectionAndAddItem } = useCollections();
	const { item } = useMoreOptionsItemModal();

	const newCollectionButtonText = !item ? 'Criar nova coleção' : 'Criar coleção e adicionar item';

	const onSubmit = (data: FieldValues) => {
		if (!item) {
			createCollection(data);
		} else {
			createCollectionAndAddItem(data, item);
		}
	};

	return createPortal(
		<Container>
			<Form func={handleSubmit(onSubmit)}>
				<Modal>
					<Title>Título</Title>
					<TitleInput {...register('title', { required: true, value: `Minha coleção nº ${collections.length + 1}` })} placeholder="insira o título da nova coleção" />
					<SaveNewCollectionButton type="submit">
						{newCollectionButtonText}
					</SaveNewCollectionButton>
					<CancelButton onClick={closeNewCollectionModal}>Cancelar</CancelButton>
				</Modal>
			</Form>
		</Container>,
		document.body,
	);
};

export default NewCollectionModal;
