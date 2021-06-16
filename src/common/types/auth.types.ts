import { User } from "../interfaces/user.interface";

export type AuthContextType = {
    isAuthenticated: boolean;
    setIsAuthenticated: (value:boolean) => void;
    user: User | null;
    setUser: (user:User) => void;
}

export enum Permissions {
    
}