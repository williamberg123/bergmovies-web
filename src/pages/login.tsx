import { NextPage } from 'next';
import { useForm } from 'react-hook-form';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

import Head from 'next/head';
import { Form } from '../components/Form';

import { ChangeFormTypeButton, ChangeFormTypeLink, FormTitle, HalfScreen, Input, Label, LoginPageContainer, SubmitButton, Title } from '../styles/pages/login';
import { useLogin } from '../hooks/useLogin';
import FirstPageLoading from '../components/FirstPageLoading';

const Login: NextPage = () => {
	const { handleSubmit, register } = useForm();
	const {
		isLogin, changeIsLogin, isLessThan1000px, isPasswordVisible, onClickFunc, toggleIsPasswordVisible,
		pageIsLoading,
	} = useLogin();

	if (pageIsLoading) {
		return <FirstPageLoading />;
	}

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

						<Label style={{ position: 'relative' }}>
							Password
							<Input {...register('password', { required: true })} type={isPasswordVisible ? 'text' : 'password'} placeholder="digite sua senha" />
							{
								isPasswordVisible
									? <IoMdEyeOff onClick={toggleIsPasswordVisible} />
									: <IoMdEye onClick={toggleIsPasswordVisible} />
							}
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
