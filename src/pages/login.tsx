import { useState } from 'react';
import { NextPage } from 'next';
import { FieldValues, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

import { isAxiosError } from 'axios';
import Head from 'next/head';
import { toLogUser, toRegisterUser } from '../services/api/user';
import { useAuth } from '../hooks/useAuth';
import { saveTokenInCookies } from '../utils';
import { Form } from '../components/Form';

import { ChangeFormTypeButton, ChangeFormTypeLink, FormTitle, HalfScreen, Input, Label, LoginPageContainer, SubmitButton, Title } from '../styles/pages/login';
import { useMessage } from '../hooks/useMessage';
import useMediaQuery from '../hooks/useMediaQuery';

const Login: NextPage = () => {
	const [isLogin, setIsLogin] = useState(true);
	const { handleSubmit, register } = useForm();
	const { changeUserState, changeTokenState } = useAuth();
	const { push } = useRouter();
	const { newMessage } = useMessage();
	const isLessThan1000px = useMediaQuery('(max-width: 1000px)');

	const changeIsLogin = () => {
		setIsLogin((s) => !s);
	};

	const login = async (data: FieldValues) => {
		const response = await toLogUser(data);

		if (response) {
			changeUserState(response.user);
			changeTokenState(response.token);
			saveTokenInCookies(response.token);
			push('/');
			newMessage('Login realizado com sucesso', 'success');
		}
	};

	const registerFunc = async (data: FieldValues) => {
		const response = await toRegisterUser(data);

		if (response) {
			changeUserState(response.user);
			changeTokenState(response.token);
			saveTokenInCookies(response.token);
			push('/');
			newMessage('Conta criada com sucesso', 'success');
		}
	};

	const onClickFunc = async (data: FieldValues) => {
		try {
			if (isLogin) {
				await login(data);
			} else {
				await registerFunc(data);
			}
		} catch (error) {
			console.log(error);

			if (!isAxiosError(error)) return;

			if (error?.response?.data?.message === 'email or password incorrect') {
				newMessage('Usuário ou senha incorretos', 'error');
			} else {
				newMessage('Ops! Algo deu errado.', 'error');
			}
		}
	};

	return (
		<>
			<Head>
				<title>{`BergMovies | ${isLogin ? 'Login' : 'Entrar'}`}</title>
			</Head>
			<LoginPageContainer>
				<HalfScreen bgColor="primary">
					<Title>
						Tenha acesso a inúmeros filmes & <br /> séries, basta entrar e desfrutar!
					</Title>

					{
						!isLessThan1000px && (
							<ChangeFormTypeButton onClick={changeIsLogin}>
								Criar conta
							</ChangeFormTypeButton>
						)
					}
				</HalfScreen>

				<HalfScreen bgColor="darkGray">
					<Form func={handleSubmit(onClickFunc)}>
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
		</>
	);
};

export default Login;
