import { ReactNode } from "react"

export type Alert = {
    message: string | null;
    severity: 'error' | 'warn' | 'info' | 'success' | null;
    show: boolean,
    onClear?: (...args:any[]) => any | void 
}

export type AlertContextType = {
    alert: Alert;
    setAlert: (alert:Alert) => void;
}

export type AlertProps = {
    alert: Alert,
    handleAlertClose: ()=>void
}

export type AlertProviderProps = {
    alert: ReactNode,
    children: ReactNode[] | ReactNode
}