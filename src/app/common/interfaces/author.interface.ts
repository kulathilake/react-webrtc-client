import { User } from "./user.interface";

export interface Author {
    id: string;
    user: User;
    privateKey: string;
    publicKey: string;
    
}