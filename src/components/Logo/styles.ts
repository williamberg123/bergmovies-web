import styled from 'styled-components';

export const Container = styled.span`
	font-weight: bold;
	color: ${({ theme }) => theme.colors.white};
	user-select: none;
`;

export const PinkText = styled.span`
	color: ${({ theme }) => theme.colors.primary};
`;
