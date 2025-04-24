export type MessageType = 'error' | 'success';

export interface MessageContextType {
    show: boolean;
    isFirstRender: {
        current: boolean;
    };
    content: string | null;
    messageType: MessageType;
    // eslint-disable-next-line
    newMessage: (m: string, mType: MessageType) => void;
}
