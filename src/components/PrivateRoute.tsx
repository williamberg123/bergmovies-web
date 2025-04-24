'use client';

import { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/router';
import { accessSavedToken } from '../utils';

interface PrivateRouteProps {
    children: ReactNode;
}

export function PrivateRoute({ children }: PrivateRouteProps) {
    const { push } = useRouter();
    const isAuthenticated = accessSavedToken('user_token');

    useEffect(() => {
        if (!isAuthenticated) {
            push('/login');
        }
    }, [isAuthenticated, push]);

    return (
        <>
            {!isAuthenticated && null}
            {isAuthenticated && children}
        </>
    );
}
