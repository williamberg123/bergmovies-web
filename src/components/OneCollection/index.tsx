import Link from 'next/link';
import { FC } from 'react';

import { CollectionProps } from '../../@types/collections';
import { CollectionTitle, Container, NumberItems } from './styles';

const OneCollection: FC<CollectionProps> = ({ title, items_list, id }) => {
	return (
		<Link style={{ textDecoration: 'none' }} href={`/collections/c/${id}`}>
			<Container>
				<CollectionTitle>{title}</CollectionTitle>
				<NumberItems>
					{items_list.length === 0 && 'Nenhum item'}
					{items_list.length === 1 && '1 item'}
					{items_list.length > 1 && `${items_list.length} itens`}
				</NumberItems>
			</Container>
		</Link>
	);
};

export default OneCollection;
