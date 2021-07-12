import { Route } from "../common/types/routes";
import Test from "../features/Test";

/**
 * This file contains all the routes used by the application.
 */
export const routes: Route[] = [
    //Test Route for Development
    {
        component: Test,
        path: '/test',
        exact: true,
        isProtected: false,
    }
];