import { useDispatch, useSelector } from 'react-redux';
import { SlClose } from 'react-icons/sl';
import { IoIosArrowDown } from 'react-icons/io';

import { AddToCollectionButton, AddToFavoritesButton, CloseOptionsButton, Container, ItemTitle, Modal, ModalHeader, MovieBackdropImage } from './styles';
import { toHide } from '../../store/modal';
import { generateImageURL } from '../../utils';

export interface ModalType {
    name: string;
    backdropPath: string;
    isVisible: boolean;
}

export default function MoreOptionsMovieModal() {
    const { modal: { name, backdropPath } } = useSelector((state: { modal: ModalType }) => state);
    const dispatch = useDispatch();

    const toHideModal = () => {
        dispatch(toHide());
    };

    return (
        <Container>
            <Modal>
                <ModalHeader>
                    <span>Filme</span>
                    <CloseOptionsButton onClick={toHideModal}>
                        <SlClose />
                    </CloseOptionsButton>
                </ModalHeader>
                <ItemTitle>{name}</ItemTitle>
                <MovieBackdropImage src={generateImageURL('w300', backdropPath)} alt={name} />
                <AddToCollectionButton>
                    Adicionar à coleção
                    <IoIosArrowDown />
                </AddToCollectionButton>
                <AddToFavoritesButton>Adicionar aos favoritos</AddToFavoritesButton>
            </Modal>
        </Container>
    );
}
