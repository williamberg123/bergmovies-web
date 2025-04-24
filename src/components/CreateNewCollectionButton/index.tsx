import { FC } from 'react';
import { HiPlus } from 'react-icons/hi';

import { Container } from './styles';

interface CreateNewCollectionButtonProps {
    openModal: () => void;
}

const CreateNewCollectionButton: FC<CreateNewCollectionButtonProps> = ({ openModal }) => {
    return (
        <Container onClick={openModal}>
            <HiPlus />
            <span>Nova coleção</span>
        </Container>
    );
};

export default CreateNewCollectionButton;
