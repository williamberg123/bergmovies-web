import { FieldValues } from 'react-hook-form';

import { api } from '.';
import { ApiUserResponse } from '../../@types/api';

export const toRegisterUser = async ({ email, password }: FieldValues): Promise<ApiUserResponse> => {
    const response = await api.post('/users/register', {
        email, password,
    });

    return response.data;
};

export const toLogUser = async ({ email, password }: FieldValues): Promise<ApiUserResponse> => {
    const response = await api.post('/users/authenticate', {
        email, password,
    });

    return response.data;
};
