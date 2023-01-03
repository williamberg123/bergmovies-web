import Link from 'next/link';
import { FC } from 'react';
import { BiMovie } from 'react-icons/bi';
import { FaTv } from 'react-icons/fa';
import { MdCollections, MdBookmarks } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { changeState, PageType } from '../../store/page';

import { NavBarContainer, Navigation } from './styles';

export const NavBar: FC = () => {
	const { page } = useSelector((state: { page: PageType }) => state);
	const dispatch = useDispatch();

	const onClick = (p: PageType) => {
		dispatch(changeState(p));
	};

	return (
		<NavBarContainer>
			<Navigation>
				<li>
					<Link
						onClick={() => onClick('movies')}
						className={page === 'movies' ? 'page' : ''}
						href="/"
					>
						<BiMovie />
						Filmes
					</Link>
				</li>

				<li>
					<Link
						onClick={() => onClick('series')}
						className={page === 'series' ? 'page' : ''}
						href="/series"
					>
						<FaTv />
						Séries
					</Link>
				</li>

				<li>
					<Link
						onClick={() => onClick('collections')}
						className={page === 'collections' ? 'page' : ''}
						href="/collections"
					>
						<MdCollections />
						Coleções
					</Link>
				</li>

				<li>
					<Link
						onClick={() => onClick('favorites')}
						className={page === 'favorites' ? 'page' : ''}
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
