import { LoginError, SignupError } from "../../../common/errors";
import { AuthProvider } from "../../../common/interfaces/provider.types";
import { User } from "../../../common/interfaces/user.interface";
import { Backend } from "../../backend.interface";



export default class MockBackend implements Backend{
    accessToken: string | null = null;
    private user = {
        email: '',
        avatar: '/assets/icons/user.png',
        tokens: {
            accessToken: {
                data: 'xxxxxx',
                ttl: 36000,
            }
        }
    }  

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
                    this.accessToken = this.user.tokens.accessToken.data;
                    this.user.email = email;
                    res(this.user);
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
            this.accessToken = this.user.tokens.accessToken.data;
            this.user.email = 'email@provider.com';
            res(this.user);
           })
       } catch (error) {
           throw new LoginError(error.message);
       }
    };

    async signup(email: string, password: string): Promise<User>{
        try {
            return new Promise((res,rej) => {
                if(email !== this.user.email) {
                    this.user.email = email;
                    this.accessToken = this.user.tokens.accessToken.data;
                    res(this.user);
                } else {
                    rej( new SignupError('User Already Exists'))
                }
            })
        } catch (error) {
            throw new SignupError(error.message);
        }

    }

    async federatedSignup(provider: AuthProvider): Promise<User> {
        try {
            return new Promise((res,rej) => {
                    this.user.email = 'email@provider.com';
                    res(this.user);
                }
            )
        } catch (error) {
            throw new SignupError(error.message);
        }

    }

}