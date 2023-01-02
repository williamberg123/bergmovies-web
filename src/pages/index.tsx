import { NextPage } from 'next';
import { Header } from '../components/Header';
import { HomePageContainer } from '../styles/pages/home';

const Home: NextPage = () => {
	return (
		<HomePageContainer>
			<Header />
		</HomePageContainer>
	);
};

export default Home;
