import styled from 'styled-components';

export const HeaderContainer = styled.header`
	width: 100%;
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 20px;
	border-bottom: 1px solid ${({ theme }) => theme.colors.mediumGray};
`;
