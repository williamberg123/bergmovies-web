import { useState } from 'react';
import { NextPage } from 'next';
import { FieldValues, useForm } from 'react-hook-form';
import { Form } from '../components/Form';
import { ChangeFormTypeButton, ChangeFormTypeLink, FormTitle, HalfScreen, Input, Label, LoginPageContainer, SubmitButton, Title } from '../styles/pages/login';
import { toRegisterUser } from '../services/api';

const Login: NextPage = () => {
	const [isLogin, setIsLogin] = useState(true);
	const { handleSubmit, register } = useForm();

	const changeIsLogin = () => {
		setIsLogin((s) => !s);
	};

	return (
		<LoginPageContainer>
			<HalfScreen bgColor="primary">
				<Title>
					Tenha acesso a inúmeros filmes & <br /> séries, basta entrar e desfrutar!
				</Title>

				<ChangeFormTypeButton onClick={changeIsLogin}>
					Criar conta
				</ChangeFormTypeButton>
			</HalfScreen>

			<HalfScreen bgColor="darkGray">
				<Form func={handleSubmit((data: FieldValues) => toRegisterUser(data))}>
					<FormTitle>
						{
							isLogin ? 'Login' : 'Criar conta'
						}
					</FormTitle>

					<Label>
						Email
						<Input {...register('email', { required: true })} type="email" placeholder="digite seu email" />
					</Label>

					<Label>
						Password
						<Input {...register('password', { required: true })} type="password" placeholder="digite sua senha" />
					</Label>

					<ChangeFormTypeLink onClick={changeIsLogin}>
						{
							isLogin
							? 'Não possui uma conta? Crie uma aqui'
							: 'Já possui uma conta? Acesse-a aqui'
						}
					</ChangeFormTypeLink>

					<SubmitButton type="submit">
						{
							isLogin ? 'Entrar' : 'Criar conta'
						}
					</SubmitButton>
				</Form>
			</HalfScreen>
		</LoginPageContainer>
	);
};

export default Login;
