import styled from 'styled-components';

export const NavBarContainer = styled.nav`

`;

export const Navigation = styled.ul`
	display: flex;
	align-items: center;

	& li {
		margin: 0 20px;
	}

	& a {
		text-decoration: none;
		border-radius: 50%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-size: 0.7rem;
		padding: 10px;
		color: ${({ theme }) => theme.colors.lightGray};
	}

	& a:hover {
		color: ${({ theme }) => theme.colors.primary};
	}

	& svg {
		width: 20px;
		height: 20px;
		margin-bottom: 3px;
	}
`;
