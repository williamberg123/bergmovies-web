import { FC, useState } from 'react';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

import { Movie } from '../Movie';
import { ArrowLeft, ArrowRight, Container, Movies, MoviesContainer, MoviesListTitle } from './styles';

export interface MoviesListProps {
	title: string;
	items: any[];
}

export const MoviesList: FC<MoviesListProps> = ({ title, items }: MoviesListProps) => {
	const [scrollX, setScrollX] = useState(0);
	const [maximumScroll] = useState(() => {
		const listWidth = global?.window?.document?.getElementById('list')?.clientWidth;
		const listContainerWidth = global?.window?.document?.getElementById('list-container')?.clientWidth;
		const documentWidth = global?.window?.document?.body?.clientWidth;

		if (!listWidth || !listContainerWidth || (documentWidth >= listWidth)) return null;

		return listContainerWidth - listWidth;
	});

	const handleRight = () => {
		if (!maximumScroll) return;
		if (scrollX - 400 <= maximumScroll) {
			setScrollX(maximumScroll);
			return;
		}

		setScrollX((s) => s - 400);
	};

	const handleLeft = () => {
		if (scrollX + 400 >= 0) {
			setScrollX(0);
			return;
		}

		setScrollX((s) => s + 400);
	};

	return (
		<Container>
			<MoviesListTitle>{title}</MoviesListTitle>
			<MoviesContainer id="list-container">

				{
					scrollX < 0 && (
						<ArrowLeft onClick={handleLeft}>
							<SlArrowLeft />
						</ArrowLeft>
					)
				}

				<Movies id="list" style={{ marginLeft: scrollX }}>
					{
						items.map((item, index: number) => <Movie key={`movie-${index}`} />)
					}
				</Movies>

				<ArrowRight onClick={handleRight}>
					<SlArrowRight />
				</ArrowRight>
			</MoviesContainer>

		</Container>
	);
};
