import { FC } from 'react';
import { CgCloseO } from 'react-icons/cg';

import { Background, Container, Overview, SeeMoreTitle } from './styles';

interface SeeMoreOverviewType {
	title: string;
	overview: string;
	closeOverview: () => void;
}

export const SeeMoreOverview: FC<SeeMoreOverviewType> = ({ title, overview, closeOverview }) => {
	return (
		<Background>
			<Container>
				<CgCloseO onClick={closeOverview} />

				<SeeMoreTitle>
					{
						title
					}
				</SeeMoreTitle>

				<Overview>
					{overview}
				</Overview>
			</Container>
		</Background>
	);
};
