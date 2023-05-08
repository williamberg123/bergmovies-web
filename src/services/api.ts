import axios from 'axios';
import { FieldValues } from 'react-hook-form';

export const api = axios.create({
    baseURL: 'http://localhost:5555/v1/',
});

export const toRegisterUser = async ({ email, password }: FieldValues) => {
    console.log(email, password);
    const user = await api.post('/users/register', {
        email, password,
    });

    console.log(user);
};
