import { createContext, useState } from "react";
import { User } from "../../common/interfaces/user.interface";
const AuthContext = createContext<any>({}); //TODO: AuthContextInterface
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