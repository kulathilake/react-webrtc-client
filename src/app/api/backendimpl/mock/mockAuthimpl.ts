import MockBackend from ".";
import { LoginError, SignupError } from "../../../common/errors";
import { AuthProvider } from "../../../common/interfaces/provider.types";
import { User, UserProfile } from "../../../common/interfaces/user.interface";
import { BackendAuth} from "../../backend.interface";

function getFakeUser(email?: string) {
    return {
        email: email || 'email@provider.com',
        avatar: '/assets/icons/user.png',
        tokens: {
            accessToken: {
                data: 'xxxxx',
                ttl: 3600,
            },
            refreshToken: {
                data: 'refresh',
                ttl: 36000,
            }
        }
    } ;
}

export default class MockAuthImpl implements BackendAuth {
    private backend: MockBackend;

    constructor(backend: MockBackend){
        this.backend = backend;
    }

    /* Authentication Methods */
    
    /**
     * Sends a Login with Email and Password request
     * @param email string
     * @param password string
     * @returns User
     */

    async login(email: string, password: string): Promise<User> {
       try {
           return new Promise(((res,rej)=>{
               if(email === 'dev@rupasutra.com'&& password === 'RupasutraDev!'){
                  let user = getFakeUser(email);     
                  this.backend.setAccessToken(user.tokens.accessToken.data);
                  res(user);
               } else {
                    rej(new Error('Invalid Credentials'))
               }
           }))
       } catch (error) {
           throw new LoginError(error.message)
       }
    };

    /**
     * Sends a Login with Auth Provider Request
     * @param proivder AuthProvider
     * @returns User
     */
    async federatedLogin(proivder: AuthProvider): Promise<User> {
       try {
           return new Promise(res => {
            let user = getFakeUser();
            this.backend.setAccessToken(user.tokens.accessToken.data);
            res(user);
           })
       } catch (error) {
           throw new LoginError(error.message);
       }
    };

    /**
     * Sends Sign up with email password request
     * @param email string
     * @param password string
     * @returns User
     */
    async signup(email: string, password: string): Promise<User>{
        try {
            return new Promise((res,rej) => {
                let user = getFakeUser();      
                if(email !== user.email) {
                    this.backend.setAccessToken(user.tokens.accessToken.data);
                    user.email = email;
                    res(user);
                } else {
                    rej( new SignupError('User Already Exists'))
                }
            })
        } catch (error) {
            throw new SignupError(error.message);
        }

    }

    /**
     * Sends Federated Sign Up Request
     * @param provider AuthProvider
     * @returns User
     */
    async federatedSignup(provider: AuthProvider): Promise<User> {
        try {
            return new Promise((res,rej) => {
                let user = getFakeUser();
                this.backend.setAccessToken(user.tokens.accessToken.data);
                res(user);
                }
            )
        } catch (error) {
            throw new SignupError(error.message);
        }

    };

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
    getUserProfile(): UserProfile {
        throw new Error("Method not implemented.");
    }
    getSession() {
        throw new Error("Method not implemented.");
    }


}