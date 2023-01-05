import { FC, useState } from 'react';
import { CgClose, CgMenuRight } from 'react-icons/cg';

import useMediaQuery from '../../hooks/useMediaQuery';
import { Logo } from '../Logo';
import { MobileNavBar } from '../MobileNavBar';
import { NavBar } from '../NavBar';
import { Profile } from '../Profile';
import { HeaderContainer, ProfileContainer } from './styles';

export const Header: FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const isMobile = useMediaQuery('(max-width: 700px)');

	const changeOpenState = () => {
		setIsOpen((s) => !s);
	};

	return (
		<HeaderContainer>
			<Logo />

			{
				!isMobile && <NavBar />
			}

			<ProfileContainer>
				<Profile />
				{
					isMobile && (
						<>
							{
								isOpen
									? <CgClose onClick={changeOpenState} />
									: <CgMenuRight onClick={changeOpenState} />
							}
							<MobileNavBar isOpen={isOpen} />
						</>
					)
				}
			</ProfileContainer>
		</HeaderContainer>
	);
};
