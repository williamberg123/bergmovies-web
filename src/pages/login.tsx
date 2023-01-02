import { NextPage } from 'next';
import { Form } from '../components/Form';
import { ChangeFormTypeButton, ChangeFormTypeLink, FormTitle, HalfScreen, Input, Label, LoginPageContainer, SubmitButton, Title } from '../styles/pages/login';

const Login: NextPage = () => {
	return (
		<LoginPageContainer>
			<HalfScreen bgColor="primary">
				<Title>
					Tenha acesso a inúmeros filmes & <br /> séries, basta entrar e desfrutar!
				</Title>

				<ChangeFormTypeButton>
					Criar conta
				</ChangeFormTypeButton>
			</HalfScreen>

			<HalfScreen bgColor="darkGray">
				<Form func={() => {}}>
					<FormTitle>Login</FormTitle>

					<Label>
						Email
						<Input type="email" placeholder="digite seu email" required />
					</Label>

					<Label>
						Password
						<Input type="password" placeholder="digite sua senha" required />
					</Label>

					<ChangeFormTypeLink>Não possui uma conta? Crie uma aqui</ChangeFormTypeLink>

					<SubmitButton type="submit">Entrar</SubmitButton>
				</Form>
			</HalfScreen>
		</LoginPageContainer>
	);
};

export default Login;
