import styled from 'styled-components';

export const LoginPageContainer = styled.div`
	display: flex;
	width: 100%;
`;

export const HalfScreen = styled.div<{ bgColor: string }>`
	width: 50%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: ${({ bgColor, theme }) => theme.colors[bgColor]};

	& form {
		width: 380px;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: ${({ theme }) => theme.colors.primary};
		padding: 20px 20px 40px;
		border-radius: 10px;
		animation: form_emerge 1s ease;
	}

	@keyframes form_emerge {
		0% {
			transform: scale(0.7);
			opacity: 0;
		}

		100% {
			transform: scale(1);
		}
	}
`;

export const Title = styled.span`
	font-weight: bold;
	color: ${({ theme }) => theme.colors.white};
	font-size: 1.8rem;
	animation: title_emerge 1s ease;

	@keyframes title_emerge {
		0% {
			transform: translateX(-70px);
			opacity: 0;
		}

		100% {
			transform: translateX(0px);
		}
	}
`;

export const ChangeFormTypeButton = styled.button`
	width: 400px;
	height: 60px;
	border-radius: 50px;
	border: 2px solid ${({ theme }) => theme.colors.white};
	color: ${({ theme }) => theme.colors.white};
	background-color: ${({ theme }) => theme.colors.primary};
	font-weight: bold;
	font-size: 1rem;
	margin: 40px 0;
	cursor: pointer;
	animation: change_button_emerge 1s ease;

	&:hover {
		background-color: ${({ theme }) => theme.colors.primaryLight};
	}

	@keyframes change_button_emerge {
		0% {
			transform: translateY(70px);
			opacity: 0;
		}

		100% {
			transform: translateY(0px);
		}
	}
`;

export const FormTitle = styled.span`
	font-weight: bold;
	color: ${({ theme }) => theme.colors.white};
	font-size: 1.2rem;
`;

export const Label = styled.label`
	width: 320px;
	display: flex;
	flex-direction: column;
	font-weight: 300;
	font-size: 0.9rem;
	color: ${({ theme }) => theme.colors.white};
	margin-top: 20px;
`;

export const Input = styled.input`
	width: 100%;
	height: 50px;
	border-radius: 5px;
	border: none;
	margin-top: 5px;
	padding: 0 10px;
`;

export const SubmitButton = styled.button`
	width: 320px;
	height: 50px;
	margin-top: 20px;
	border-radius: 5px;
	border: 2px solid ${({ theme }) => theme.colors.white};
	color: ${({ theme }) => theme.colors.white};
	background-color: ${({ theme }) => theme.colors.primary};
	font-weight: bold;
	font-size: 1rem;
	cursor: pointer;

	&:hover {
		background-color: ${({ theme }) => theme.colors.primaryLight};
	}
`;

export const ChangeFormTypeLink = styled.a`
	text-decoration: none;
	color: ${({ theme }) => theme.colors.white};
	font-size: 0.7rem;
	cursor: pointer;
	margin-top: 20px;

	&:hover {
		text-decoration: underline;
	}
`;
