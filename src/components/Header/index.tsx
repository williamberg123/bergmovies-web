import { FC } from 'react';
import { Logo } from '../Logo';
import { NavBar } from '../NavBar';
import { Profile } from '../Profile';
import { HeaderContainer } from './styles';

export const Header: FC = () => {
	return (
		<HeaderContainer>
			<Logo />
			<NavBar />
			<Profile />
		</HeaderContainer>
	);
};
