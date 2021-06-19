import { User } from "../../../common/types/user";
import { IAuthApi } from "../../../common/types/auth";

export class AuthApi implements IAuthApi{
    private static instance: AuthApi | null;
    static getApi() {
        if(this.instance) {
            return this.instance;
        } else {
            return new AuthApi();
        }
    };
    
    private constructor() {};

    signup(email: string, password: string): Promise<User> {
        throw new Error("Method not implemented.");
    }
    federatedSignup(provider: any): Promise<User> {
        throw new Error("Method not implemented.");
    }
    login(email: string, password: string): Promise<User> {
        throw new Error("Method not implemented.");
    }
    federatedLogin(provider: any): Promise<User> {
        throw new Error("Method not implemented.");
    }
    logout(): void {
        throw new Error("Method not implemented.");
    }
    reset(email: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
    resetConfirm(email: string, code: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
    confirmEmail(code: string, email: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
    refresh(token: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
    changePassword(oldPassword: string, newPassword: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
    getUser(): User {
        throw new Error("Method not implemented.");
    }
    getSession() {
        throw new Error("Method not implemented.");
    }
    
}
