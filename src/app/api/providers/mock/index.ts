import { LoginError } from "../../../common/errors";
import { AuthProvider } from "../../../common/interfaces/provider.types";
import { User } from "../../../common/interfaces/user.interface";
import { Backend } from "../../backend.interface";

export default class MockBackend implements Backend{

    async login(email: string, password: string): Promise<User> {
        return new Promise((res,rej)=>{
            if(email === 'dev@rupasutra.com' && password === 'RupasutraDev!'){
                res({
                    email: email
                });
            }else {
                rej(new LoginError('Invalid Credentials'));
            }
        })
    };

    async federatedLogin(proivder: AuthProvider) {
        return new Promise((res,rej)=>{

        })
    }

}