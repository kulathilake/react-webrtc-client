import React from "react"
import { useAlert } from "../../../app/hooks"
import { AlertProps } from "../../types/alert.types";

export default function withAlertContext (AlertComponent: React.ComponentType<AlertProps>): React.FC<AlertProps>{
    return  () => {
        const {alert,setAlert} = useAlert();
        const handleAlertClose = () => {
            setAlert({
                ...alert,
                message: null, 
                show: false
            });
            if(alert.onClear) {
                alert.onClear();
            }
        }
        return <AlertComponent {...{alert, handleAlertClose}}/>
    }
    
}
