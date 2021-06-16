import { createContext, useState } from "react";
import { User } from "../../common/interfaces/user.interface";
export type AuthContextType = {
    isAuthenticated: boolean;
    setIsAuthenticated: (value:boolean) => void;
    user: User | null;
    setUser: (user:User) => void;
}
const AuthContext = createContext<AuthContextType>({} as AuthContextType); //TODO: AuthContextInterface
const {Consumer: AuthConsumer, Provider} = AuthContext;

function AuthProvider(props: any) {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [user, setUser] = useState<User|null>(null);

    return (
        <Provider value={{isAuthenticated,setIsAuthenticated, user, setUser}}>
            {props.children}
        </Provider>
    )
};

export default AuthContext;
export {AuthConsumer, AuthProvider};