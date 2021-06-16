import { BrowserRouter, Switch, Route, } from "react-router-dom";
import { RouterProps } from "../../types/route.types";
import withRouteProtection from "./withRouteProtection";

const ProtectedRoute = withRouteProtection('/login');
ProtectedRoute.displayName = "ProtectedRoute";
export default function MainRoutes(props:RouterProps){
    return (
        <BrowserRouter>
            <Switch>
            {props.routes.map((route,i)=>{
                return route.isProtected? 
                <ProtectedRoute {...route} key={`route-${i}`}>
                    {<route.component/>}
                </ProtectedRoute>:
                <Route {...route} key={`route-${i}`}>
                    {<route.component/>}
                </Route>
            })
            }
            </Switch>
        </BrowserRouter>
    )
}