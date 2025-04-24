import { FC } from 'react';
import { useRouter } from 'next/router';
import { CgChevronDoubleLeftO } from 'react-icons/cg';

import { Container } from './styles';

const BackPageButton: FC = () => {
    const { back } = useRouter();

	const onClick = () => {
		back();
	};

    return (
        <Container onClick={onClick}>
            <CgChevronDoubleLeftO size={20} />
            voltar
        </Container>
    );
};

export default BackPageButton;
