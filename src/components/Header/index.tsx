import { FC } from 'react';
import useMediaQuery from '../../hooks/useMediaQuery';
import { Logo } from '../Logo';
import { NavBar } from '../NavBar';
import { Profile } from '../Profile';
import { HeaderContainer } from './styles';

export const Header: FC = () => {
	const isMobile = useMediaQuery('(max-width: 700px)');

	return (
		<HeaderContainer>
			<Logo />

			{
				!isMobile && <NavBar />
			}
			<Profile />
		</HeaderContainer>
	);
};
