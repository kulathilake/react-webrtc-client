import { Permissions } from "../types/auth.types";

export interface User {
    username: string,
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
    permissions: Permissions []
    
}