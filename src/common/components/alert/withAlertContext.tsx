import React from "react"
import { useAlert } from "../../../app/hooks"
import { AlertProps } from "../../types/alert";

export default function withAlertContext (AlertComponent: React.ComponentType<AlertProps>): React.FC{
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
        return <AlertComponent alert={alert} handleAlertClose={handleAlertClose}/>
    }
    
}
