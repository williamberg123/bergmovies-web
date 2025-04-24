import Link from 'next/link';
import { FC } from 'react';
import { BiMovie } from 'react-icons/bi';
import { FaTv } from 'react-icons/fa';
import { MdCollections, MdBookmarks } from 'react-icons/md';

import { NavBarContainer, Navigation } from './styles';
import { useCurrentPage } from '../../hooks/useCurrentPage';

export const NavBar: FC = () => {
	const { currentPage } = useCurrentPage();

	return (
		<NavBarContainer>
			<Navigation>
				<li>
					<Link
						className={currentPage === 'movies' ? 'page' : ''}
						href="/"
					>
						<BiMovie />
						Filmes
					</Link>
				</li>

				<li>
					<Link
						className={currentPage === 'series' ? 'page' : ''}
						href="/series"
					>
						<FaTv />
						Séries
					</Link>
				</li>

				<li>
					<Link
						className={currentPage === 'collections' ? 'page' : ''}
						href="/collections"
					>
						<MdCollections />
						Coleções
					</Link>
				</li>

				<li>
					<Link
						className={currentPage === 'favorites' ? 'page' : ''}
						href="/favorites"
					>
						<MdBookmarks />
						Favoritos
					</Link>
				</li>
			</Navigation>
		</NavBarContainer>
	);
};
