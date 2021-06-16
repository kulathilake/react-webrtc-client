
import {AuthProvider} from "../common/interfaces/provider.types";
import { User, UserProfile } from "../common/interfaces/user.interface";

export interface Backend {
    accessToken: string | null;
    auth: BackendAuth;
    storage: BackendStorage;
    /**
     * Sets the Current Backend Access Token
     * @param token string
     */
    setAccessToken(token: string) : void;
};

export interface BackendAuth {
    /**
     * Performs User Signup with email and password
     * @param email string
     * @param password string
     */
    signup(email:string, password: string): Promise<User>,
    /**
     * Performes Federated User Sign Up
     * @param provider AuthProvider
     */
    federatedSignup(provider: AuthProvider): Promise<User>,
    /**
     * Performs user Login with email and password.
     * @param email string
     * @param password string
     */
    login(email: string, password: string): Promise<User>,
    federatedLogin(provider: AuthProvider): Promise<User>
    logout():void,
    reset(email: string): Promise<any>,
    resetConfirm(email: string, code: string): Promise<any>,
    confirmEmail(code:string,email:string): Promise<any>,
    refresh(token: string): Promise<any>,
    changePassword(oldPassword: string, newPassword: string): Promise<any>
    getUser(): User,
    getUserProfile(): UserProfile;
    getSession(): any;
    
}

export interface BackendStorage {
    putFile(file: Blob): Promise<any>,
    getFile(key: string): Promise<Blob>,
    deleteFile(key: string): Promise<any>,
    patchFile(key:string, file: Blob): Promise<any>
}
