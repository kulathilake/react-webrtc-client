import { BrowserRouter, Switch, Route } from "react-router-dom";
import { RouterProps } from "../../types/route.types";
import withRouteProtection from "./withRouteProtection";

const ProtectedRoute = withRouteProtection('/login');
export default function Router(props:RouterProps){
    return (
        <BrowserRouter>
            <Switch>
            {props.routes.map((route,i)=>{
                return route.isProtected? 
                <Route {...route} key={`route-${i}`}>
                    {<route.component/>}
                </Route>:
                <ProtectedRoute {...route} key={`route-${i}`}>
                    {<route.component/>}
                </ProtectedRoute>
            })
            }
            </Switch>
        </BrowserRouter>
    )
}