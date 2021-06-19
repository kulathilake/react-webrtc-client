import { User } from "../interfaces/user.interface";

export type AuthContextType = {
    isAuthenticated: boolean;
    setIsAuthenticated: (value:boolean) => void;
    user: User | null;
    setUser: (user:User) => void;
}

export enum Permissions {
    
}

export interface AuthWrapperProps{
  setAlert: () => void;
  onLogin: (email: string, password: string) => void;
}

export interface LoginViewProps extends AuthWrapperProps{
    variant?: 'page' | 'modal' | 'dropdown';
    social?: {
        google?: boolean
        facebook?: boolean;
        github?: boolean;
    }
}

export interface SignupViewProps extends LoginViewProps{
    
}