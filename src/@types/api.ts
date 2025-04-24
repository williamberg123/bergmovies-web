import { User } from './user';

export type ApiUserResponse = { user: User; token: string; } | null | undefined;
