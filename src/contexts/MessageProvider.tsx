import { ReactNode, createContext, useEffect, useMemo, useRef, useState } from 'react';
import { MessageContextType, MessageType } from '../@types/message';

export const MessageContext = createContext({});

export const MessageProvider = ({ children }: { children: ReactNode }) => {
    const [show, setShow] = useState(false);
    const [content, setContent] = useState<string | null>(null);
    const [messageType, setMessageType] = useState<MessageType>('success');
    const isFirstRender = useRef(true);

    const newMessage = (m: string, mType: MessageType) => {
        setContent(m);
        setMessageType(mType);
        setShow(true);
    };

    const exitMessage = () => {
        setShow(false);
    };

    useEffect(() => {
        if (show) {
            setTimeout(() => {
                exitMessage();
            }, 3000);
        }
    }, [show]);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
        }
    }, [isFirstRender.current]);

    const context = useMemo<MessageContextType>(() => ({
        show, content, messageType, newMessage, isFirstRender,
    }), [show, content, messageType, newMessage, isFirstRender.current]);

    return (
        <MessageContext.Provider value={context}>
            {children}
        </MessageContext.Provider>
    );
};
