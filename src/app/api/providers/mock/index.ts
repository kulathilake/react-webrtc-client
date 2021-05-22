import { LoginError } from "../../../common/errors";
import { AuthProvider } from "../../../common/interfaces/provider.types";
import { User } from "../../../common/interfaces/user.interface";
import { Backend } from "../../backend.interface";

export default class MockBackend implements Backend{

    /**
     * @param email string
     * @param password string
     * @returns a User object of @typedef User
     */
    async login(email: string, password: string): Promise<User> {
       try {
           return new Promise(((res,rej)=>{
               if(email === 'dev@rupasutra.com'&& password === 'RupasutraDev!'){
                   res({
                       email: email,
                       avatar: '/assets/icons/user.png',
                       tokens: {
                           accessToken: {
                               data: 'xxxxxx',
                               ttl: 36000,
                           }
                       }
                   })
               } else {
                   rej(new Error('Invalid Credentials'))
               }
           }))
       } catch (error) {
           throw new LoginError(error.message)
       }
    };

    async federatedLogin(proivder: AuthProvider): Promise<User> {
       try {
           return new Promise(res => {
               res({
                email: 'dev@google.com',
                avatar: '/assets/icons/user.png',
                tokens: {
                    accessToken: {
                        data: 'xxxxxx',
                        ttl: 36000,
                    }
                }
               })
           })
       } catch (error) {
           throw new LoginError(error.message);
       }
    };

    async signup() {

    }

}