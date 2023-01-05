import styled from 'styled-components';

export const HeaderContainer = styled.header`
	width: 100%;
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 20px;
	border-bottom: 1px solid ${({ theme }) => theme.colors.mediumGray};
	position: relative;
`;

export const ProfileContainer = styled.div`
	display: flex;
	align-items: center;
	color: ${({ theme }) => theme.colors.white};

	& svg {
		width: 30px;
		height: 30px;
		margin-left: 10px;
	}
`;
