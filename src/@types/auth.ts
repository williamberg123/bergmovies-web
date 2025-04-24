import { User } from './user';

export interface UseAuthResponse {
    user: User;
	// eslint-disable-next-line
    changeUserState: (u: User) => undefined;
    token: string;
	// eslint-disable-next-line
    changeTokenState: (t: string) => undefined;
	logoutUser: () => void;
}
