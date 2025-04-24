import { ReactNode, createContext, useEffect, useMemo, useState } from 'react';
import { isAxiosError } from 'axios';
import { User } from '../@types/user';
import { accessSavedToken, deleteSavedToken } from '../utils';
import { api } from '../services/api';
import FirstPageLoading from '../components/FirstPageLoading';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [pageIsLoading, setPageIsLoading] = useState(true);

    const changeUserState = (u: User) => {
        setUser(u);
    };

    const changeTokenState = (t: string) => {
        setToken(t);
    };

    const retrieveUserData = async (savedToken: string) => {
        try {
            const response = await api.get('/users/retrieve', {
                headers: {
                    authorization: `Bearer ${savedToken}`,
                },
            });

            changeUserState(response.data.user);
            changeTokenState(savedToken);
        } catch (error) {
            console.log(error);

			deleteSavedToken('user_token');

            if (!isAxiosError(error)) return;

            if (error.response?.data.message === 'user not found') {
                deleteSavedToken('user_token');
            }
        } finally {
            setPageIsLoading(false);
        }
    };

	const logoutUser = () => {
		deleteSavedToken('user_token');
	};

    useEffect(() => {
        const savedToken = accessSavedToken('user_token');

        if (savedToken) {
            retrieveUserData(savedToken);
        } else {
            setPageIsLoading(false);
        }
    }, []);

    const context = useMemo(() => ({
        user, changeUserState, token, changeTokenState, logoutUser,
    }), [user, changeUserState, token, changeTokenState, logoutUser]);

    return (
        <AuthContext.Provider value={context}>
            {
                pageIsLoading
                    ? <FirstPageLoading />
                    : children
            }
        </AuthContext.Provider>
    );
};
