export class LoginError extends Error {
    message:string;
    name:string =  'LOGIN_EXCEPTION';

    constructor(message: string){
        super();
        this.message = message;
    }
}