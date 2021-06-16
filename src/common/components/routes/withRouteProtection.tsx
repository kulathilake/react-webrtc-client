import React, { ReactNode } from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { useAuth } from "../../../app/hooks"

export default function withRouteProtection(redirect: string | ReactNode): React.FC<any> {
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
        const renderFallback = ():ReactNode => {
            if(typeof redirect === 'string'){
                return <Redirect to={redirect}/>
            } else {
                return redirect
            };
        };
        return (
        <Route {...props} render={() => {
            return isAuthorized()?
                props.children
                : renderFallback();
        }}>
        </Route>
            
        )
    }
}