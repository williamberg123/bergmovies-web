import styled from 'styled-components';

export const Container = styled.div`
	width: 40px;
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	border: 2px solid ${({ theme }) => theme.colors.secondary};
	color: ${({ theme }) => theme.colors.secondary};
	font-size: 0.8rem;
	font-weight: bold;
	cursor: pointer;

	&:hover {
		background-color: ${({ theme }) => theme.colors.secondary};
		color: ${({ theme }) => theme.colors.white};
	}
`;
