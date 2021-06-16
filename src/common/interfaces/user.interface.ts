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
    
}