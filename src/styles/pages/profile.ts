import styled from 'styled-components';

export const ProfilePageTitle = styled.span`
	display: flex;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.darkGray};
    font-weight: bold;
    font-size: 2rem;
    padding: 20px;
    position: sticky;
    top: 0;
    z-index: 3;
`;

export const ExitAccountButton = styled.button`
	width: fit-content;
	padding: 10px 20px;
	border-radius: 10px;
	border: 2px solid ${({ theme }) => theme.colors.primary};
	background-color: transparent;
	color: ${({ theme }) => theme.colors.primary};
	font-weight: bold;
	margin-left: auto;
	cursor: pointer;

	&:hover {
		background-color: ${({ theme }) => theme.colors.primary};
		color: white;
	}
`;

export const PasswordResetContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 60px 0 0 60px;

	& > span {
		color: white;
		margin-bottom: 10px;
		font-size: 1.2rem;
	}

	@media (max-width: 600px) {
		margin: 40px 0 0 0;
		padding: 20px;
	}
`;

export const EmailInput = styled.input`
	width: 500px;
	height: 60px;
	background-color: ${({ theme }) => theme.colors.mediumGray};
	border: 1px solid ${({ theme }) => theme.colors.lightGray};
	color: ${({ theme }) => theme.colors.lightGray};
	padding: 15px 20px;
	border-radius: 10px;
	font-size: 1.1rem;

	@media (max-width: 600px) {
		width: 100%;
	}
`;

export const OpenPasswordResetModalButton = styled(ExitAccountButton)`
	width: 300px;
	height: 60px;
	background-color: ${({ theme }) => theme.colors.primary};
	color: white;
	margin-left: 0;
	padding: 10px 30px;
	margin-top: 10px;
	font-size: 1.1rem;

	&:hover {
		opacity: 0.7;
	}

	@media (max-width: 600px) {
		width: 200px;
		height: 50px;
		font-size: 0.8rem;
	}
`;

export const DeleteAccountButton = styled(ExitAccountButton)`
	width: 300px;
	height: 60px;
	margin-left: 0;

	@media (max-width: 600px) {
		width: 200px;
		height: 50px;
	}
`;
