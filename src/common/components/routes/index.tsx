import { BrowserRouter, Switch, Route } from "react-router-dom";
import withRouteProtection from "./withRouteProtection";

const ProtectedRoute = withRouteProtection('/login');
export default function Router(){
    return (
        <BrowserRouter>
            <Switch>

            </Switch>
        </BrowserRouter>
    )
}