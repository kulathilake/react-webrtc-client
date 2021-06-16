import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../../../app/hooks"
import { Route as RouteProps } from "../../types/route.types";

export default function withRouteProtection(Component: React.ComponentType<any>,redirect: string): React.FC<any> {
    return function(props: RouteProps) {
        const {isAuthenticated} = useAuth();
        /**
         * Checks if the user is authorized (isAuthenticated being true is a given)
         * as per the permission requirement and user permissions, to view the route.
         * WARNING: Client Side route protection is not enough to actually protect the
         * data behind these routes. Always use server sider authorization when handling 
         * requests.
         * @returns boolean
         */
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