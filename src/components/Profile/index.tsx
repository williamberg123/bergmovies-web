import Link from 'next/link';
import { FC } from 'react';

import { Container } from './styles';
import { useAuth } from '../../hooks/useAuth';
import { useCurrentPage } from '../../hooks/useCurrentPage';

export const Profile: FC = () => {
	const { user: { email } } = useAuth();
	const { currentPage } = useCurrentPage();

	const firstLetter = email.split('')[0].toUpperCase();

	return (
		<Container>
			<Link className={currentPage === 'profile' ? 'page' : ''} href="/profile">
				{firstLetter}
			</Link>
		</Container>
	);
};
