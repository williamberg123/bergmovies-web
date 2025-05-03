import { isAxiosError } from 'axios';
import { FieldValues } from 'react-hook-form';
import { useMemo, useState } from 'react';
import { useRouter } from 'next/router';

import { saveTokenInCookies } from '../utils';
import { toLogUser, toRegisterUser } from '../services/api/user';
import { useAuth } from './useAuth';
import { useMessage } from './useMessage';
import useMediaQuery from './useMediaQuery';

export const useLogin = () => {
	const [isLogin, setIsLogin] = useState(true);
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);
	const [pageIsLoading, setPageIsLoading] = useState(false);

	const { changeUserState, changeTokenState } = useAuth();
	const { push } = useRouter();
	const { newMessage } = useMessage();
	const isLessThan1000px = useMediaQuery('(max-width: 1000px)');

	const changeIsLogin = () => {
		setIsLogin((s) => !s);
	};

	const toggleIsPasswordVisible = () => setIsPasswordVisible((s) => !s);

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
			setPageIsLoading(true);

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
		} finally {
			setPageIsLoading(false);
		}
	};

	const context = useMemo(() => ({
		isLogin, isPasswordVisible, isLessThan1000px, changeIsLogin, toggleIsPasswordVisible, onClickFunc,
		pageIsLoading,
	}), [
		isLogin, isPasswordVisible, isLessThan1000px, changeIsLogin, toggleIsPasswordVisible, onClickFunc,
		pageIsLoading,
	]);

	return context;
};
