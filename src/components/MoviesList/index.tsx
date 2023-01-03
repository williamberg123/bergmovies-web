import { FC } from 'react';
import { Movie } from '../Movie';
import { Container, Movies, MoviesContainer, MoviesListTitle } from './styles';

export interface MoviesListProps {
	title: string;
	items: any[];
}

export const MoviesList: FC<MoviesListProps> = ({ title, items }: MoviesListProps) => {
	return (
		<Container>
			<MoviesListTitle>{title}</MoviesListTitle>
			<MoviesContainer>
				<Movies>
					{
						items.map((item, index: number) => <Movie key={`movie-${index}`} />)
					}
				</Movies>
			</MoviesContainer>
		</Container>
	);
};
