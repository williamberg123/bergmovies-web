import styled from 'styled-components';

export const NavBarContainer = styled.nav<{ isOpen: boolean }>`
	width: 100%;
	height: calc(100vh - 60px);
	position: absolute;
	top: 100%;
	left: 0;
	z-index: ${({ isOpen }) => isOpen ? 20 : -10};
	overflow: hidden;
`;

export const Navigation = styled.ul`
	width: 70%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: ${({ theme }) => theme.colors.darkGray};
	margin-left: auto;
	transition: ease all 0.4s;

	& li {
		margin: 20px;
	}

	& a {
		text-decoration: none;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 0.7rem;
		padding: 10px;
		color: ${({ theme }) => theme.colors.lightGray};
	}

	& a:hover {
		color: ${({ theme }) => theme.colors.primary};
	}

	& a.page {
		color: ${({ theme }) => theme.colors.primary};
	}

	& svg {
		width: 20px;
		height: 20px;
		margin-right: 10px;
	}
`;
