import { FC, useEffect, useState } from 'react';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

import { Movie } from '../Movie';
import { ArrowLeft, ArrowRight, Container, Movies, MoviesContainer, MoviesListTitle } from './styles';

export interface MoviesListProps {
	title: string;
	items: any[];
}

export const MoviesList: FC<MoviesListProps> = ({ title, items }: MoviesListProps) => {
	const [scrollX, setScrollX] = useState(0);
	const [maximumScroll, setMaximumScroll] = useState<number | null>(null);

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

	const changeMaximumScroll = () => {
		if (typeof window === 'undefined') {
			setMaximumScroll(null);
			return;
		}

		const listWidth = window?.document?.getElementById('list')?.clientWidth;
		const listContainerWidth = window?.document?.getElementById('list-container')?.clientWidth;
		const documentWidth = window?.document?.body?.clientWidth;

		if (!listWidth || !listContainerWidth || (documentWidth >= listWidth)) {
			setMaximumScroll(null);
			return;
		}

		setMaximumScroll(listContainerWidth - listWidth);
	};

	useEffect(() => {
		changeMaximumScroll();
	}, []);

	return (
		<Container>
			<MoviesListTitle>{title}</MoviesListTitle>
			<MoviesContainer id="list-container">

				{/* {
					scrollX < 0 && (
						<ArrowLeft onClick={handleLeft}>
							<SlArrowLeft />
						</ArrowLeft>
					)
				} */}

				<ArrowLeft onClick={handleLeft}>
					<SlArrowLeft />
				</ArrowLeft>

				<Movies id="list" style={{ marginLeft: scrollX }}>
					{
						items.map((item, index: number) => <Movie key={`movie-${index}`} />)
					}
				</Movies>

				{/* {
					(maximumScroll && scrollX > maximumScroll) && (
						<ArrowRight onClick={handleRight}>
							<SlArrowRight />
						</ArrowRight>
					)
				} */}

				<ArrowRight onClick={handleRight}>
					<SlArrowRight />
				</ArrowRight>
			</MoviesContainer>

		</Container>
	);
};
