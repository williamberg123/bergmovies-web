import { useContext } from 'react';
import { MessageContext } from '../contexts/MessageProvider';
import { MessageContextType } from '../@types/message';

export const useMessage = () => {
    const context = useContext(MessageContext) as MessageContextType;

    return context;
};
