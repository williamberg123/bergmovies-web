import { FC } from 'react';
import { Container, HiddenContent, ItemImage, ItemTitle } from './styles';
import { CollectionItemProps } from '../../@types/collections';
import { generateImageURL } from '../../utils';

const CollectionItem: FC<CollectionItemProps> = ({ id, media_type, title, poster_path }) => {
    return (
        <Container href={`/${media_type === 'movie' ? 'movies' : 'series'}/${id}`}>
            <ItemImage src={generateImageURL('w200', poster_path)} />
            <HiddenContent>
                <ItemTitle>{title}</ItemTitle>
            </HiddenContent>
        </Container>
    );
};

export default CollectionItem;
