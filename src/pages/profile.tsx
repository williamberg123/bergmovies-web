import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { HomePageContainer } from '../styles/pages/home';
import { Header } from '../components/Header';
import { DeleteAccountButton, EmailInput, ExitAccountButton, OpenPasswordResetModalButton, PasswordResetContainer, ProfilePageTitle } from '../styles/pages/profile';
import { useAuth } from '../hooks/useAuth';
import { useCurrentPage } from '../hooks/useCurrentPage';

const ProfilePage: NextPage = () => {
	const { user: { email }, logoutUser } = useAuth();
	const { changePage } = useCurrentPage();
	const { push } = useRouter();

	const onLogoutUser = () => {
		logoutUser();
		push('/login');
	};

	useEffect(() => {
		changePage('profile');
	}, []);

	return (
		<>
			<Head>
				<title>Perfil</title>
			</Head>
			<HomePageContainer>
				<Header />

				<ProfilePageTitle>
					Conta
					<ExitAccountButton onClick={onLogoutUser}>Sair da conta</ExitAccountButton>
				</ProfilePageTitle>

				<PasswordResetContainer>
					<span>Email</span>
					<EmailInput value={email} readOnly type="text" contentEditable={false} />
					<OpenPasswordResetModalButton>Redefinir senha</OpenPasswordResetModalButton>
				</PasswordResetContainer>

				<ProfilePageTitle style={{ flexDirection: 'column', marginTop: '100px' }}>
					Área de risco

					<DeleteAccountButton style={{ marginTop: '30px' }}>Deletar conta</DeleteAccountButton>
				</ProfilePageTitle>
			</HomePageContainer>
		</>
	);
};

export default ProfilePage;
