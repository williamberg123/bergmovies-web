// eslint-disable-next-line
import { InfinitySpin } from 'react-loader-spinner';
import { Logo } from '../Logo';
import { Container } from './styles';

export default function FirstPageLoading() {
    return (
        <Container>
            <Logo />
            <InfinitySpin color="white" />
        </Container>
    );
}
