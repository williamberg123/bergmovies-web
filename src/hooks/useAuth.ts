import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import { UseAuthResponse } from '../@types/auth';

export const useAuth = (): UseAuthResponse => {
    const context = useContext(AuthContext) as UseAuthResponse;
    return context;
};
