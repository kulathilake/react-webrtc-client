import React from "react";
import { Permissions } from "./auth.types";

export type Route = {
    path: string;
    exact: boolean;
    component: React.ComponentType<any>;
    isProtected: boolean;
    permissions?: Permissions[]
}