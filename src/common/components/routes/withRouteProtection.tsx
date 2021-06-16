import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../../../app/hooks"
import { Route as RouteProps } from "../../types/route.types";

export default function withRouteProtection(Component: React.ComponentType<any>,redirect: string): React.FC<any> {
    return function(props: RouteProps) {
        const {isAuthenticated, user} = useAuth();
        const isAuthorized = (): boolean=> {
            if(!isAuthenticated) return false;
            else return true;
            // TODO check current route permission requirements against user permissions.
        }
        return (
        <Route {...props}>
            {isAuthorized()?
                <Component {...props}/>
                :<Redirect to={redirect}/>
            }
        </Route>
            
        )
    }
}