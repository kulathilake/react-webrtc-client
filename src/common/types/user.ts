import { Address } from "./misc";
import { Permissions } from "./auth";

export interface User {
    username: string,
    permissions: Permissions [],
    profile?: {
        firstName?: string;
        lastName?: string;
        mobile?: string;
        addresses?: Address[];
    }
}

export interface AuthenticatedUser extends User {
    tokens: {
        accessToken: {
            data: string,
            ttl?: number // miliseconds
        }
        refreshToken?: {
            data: string,
            ttl?: number // miliseconds
        },
    },
}

