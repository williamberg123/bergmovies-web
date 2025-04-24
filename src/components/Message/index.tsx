import { BiCheckCircle, BiErrorCircle } from 'react-icons/bi';
import { useMessage } from '../../hooks/useMessage';
import { Container, MessageText } from './styles';

export default function Message() {
    const { content, messageType, show, isFirstRender } = useMessage();

    return (
        <Container show={show} mType={messageType} isFirstRender={isFirstRender.current}>
            <MessageText>{content}</MessageText>
            {
                messageType === 'success' ? <BiCheckCircle /> : <BiErrorCircle />
            }
        </Container>
    );
}
