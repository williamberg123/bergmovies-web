import { FC } from 'react';
import { Container } from './styles';

interface NoDataProps {
    message: string;
    size: string;
}

const NoData: FC<NoDataProps> = ({ message, size }) => {
    return (
        <Container size={size}>{message}</Container>
    );
};

export default NoData;
