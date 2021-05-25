export interface User {
    email: string,
    avatar: string,
    tokens?: {
        accessToken: {
            data: string,
            ttl: number // ttl = Time To Live
        }
        refreshToken?: {
            data: string,
            ttl: number
        },
    },
    
}

export interface UserProfile {

}