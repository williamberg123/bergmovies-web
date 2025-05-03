import { FC, useEffect, useRef, useState } from 'react';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { Movie as MovieType } from '../../@types/movie';
import useMediaQuery from '../../hooks/useMediaQuery';

import { Movie } from '../Movie';
import { ArrowLeft, ArrowRight, Container, Movies, MoviesContainer, MoviesListTitle } from './styles';

export interface MoviesListProps {
	title: string;
	items: MovieType[] | any[] | null;
}

export const MoviesList: FC<MoviesListProps> = ({ title, items }: MoviesListProps) => {
	const [scrollX, setScrollX] = useState(0);
	const [maximumScroll, setMaximumScroll] = useState<number | null>(null);
	const [scrollSize, setScrollSize] = useState<number>(0);

	const listRef = useRef<HTMLDivElement | null>(null);
	const listContainerRef = useRef<HTMLDivElement | null>(null);

	const isLessThan700px = useMediaQuery('(max-width: 700px)');

	const handleRight = () => {
		if (!maximumScroll) return;
		if (scrollX - scrollSize <= maximumScroll) {
			setScrollX(maximumScroll);
			return;
		}

		setScrollX((s) => s - scrollSize);
	};

	const handleLeft = () => {
		if (scrollX + scrollSize >= 0) {
			setScrollX(0);
			return;
		}

		setScrollX((s) => s + scrollSize);
	};

	const changeMaximumScrollAndScrollSize = () => {
		if (typeof window === 'undefined') {
			setMaximumScroll(null);
			setScrollSize(0);
			return;
		}

		// const listWidth = window?.document?.getElementById('list')?.clientWidth;
		// const listContainerWidth = window?.document?.getElementById('list-container')?.clientWidth;

		const listWidth = listRef.current?.clientWidth;
		const listContainerWidth = listContainerRef.current?.clientWidth;

		const documentWidth = window?.document?.body?.clientWidth;

		if (!listWidth || !listContainerWidth || (documentWidth >= listWidth)) {
			setMaximumScroll(null);
			setScrollSize(0);
			return;
		}

		setMaximumScroll(listContainerWidth - listWidth);

		if (isLessThan700px) {
			setScrollSize(300);
		} else {
			setScrollSize(400);
		}
	};

	useEffect(() => {
		changeMaximumScrollAndScrollSize();
	}, [items, isLessThan700px]);

	return (
		<Container>
			<MoviesListTitle>{title}</MoviesListTitle>
			<MoviesContainer ref={listContainerRef} id="list-container">
				{
					(scrollX < 0) && (
						<ArrowLeft onClick={handleLeft}>
							<SlArrowLeft />
						</ArrowLeft>
					)
				}

				<Movies ref={listRef} id="list" style={{ marginLeft: scrollX }}>
					{
						items?.map((item: MovieType, index: number) => <Movie key={`movie-${index}`} {...item} />)
					}
				</Movies>

				{
					(maximumScroll && scrollX > maximumScroll) && (
						<ArrowRight onClick={handleRight}>
							<SlArrowRight />
						</ArrowRight>
					)
				}
			</MoviesContainer>

		</Container>
	);
};
