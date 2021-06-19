import React from "react";
import { AuthWrapperProps } from "../types";

export default function withAuthContext <T extends AuthWrapperProps>(Component: React.ComponentType<T>)
: React.FC<Omit<T, keyof AuthWrapperProps>>{
    return function AuthComponent(props){
        
        return <Component 
        {...(props as T)} 
        />
    }
}