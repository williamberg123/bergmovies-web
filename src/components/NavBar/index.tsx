import Link from 'next/link';
import { FC } from 'react';
import { BiMovie } from 'react-icons/bi';
import { FaTv } from 'react-icons/fa';
import { MdCollections, MdBookmarks } from 'react-icons/md';

import { NavBarContainer, Navigation } from './styles';

export const NavBar: FC = () => {
	return (
		<NavBarContainer>
			<Navigation>
				<li>
					<Link href="/movie">
						<BiMovie />
						Filmes
					</Link>
				</li>

				<li>
					<Link href="/movie">
						<FaTv />
						Séries
					</Link>
				</li>

				<li>
					<Link href="/movie">
						<MdCollections />
						Coleções
					</Link>
				</li>

				<li>
					<Link href="/movie">
						<MdBookmarks />
						Favoritos
					</Link>
				</li>
			</Navigation>
		</NavBarContainer>
	);
};
