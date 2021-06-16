import { createContext, useState } from "react";
import { Alert, AlertContextType, AlertProviderProps } from "../../common/types/alert.types";
const AlertContext = createContext<AlertContextType>({} as AlertContextType);
const {Consumer: AlertConsumer, Provider} = AlertContext;

function AlertProvider(props: AlertProviderProps) {
    const [alert,setAlert] = useState<Alert>({
        message: null,
        severity: null,
        show: false,
    });

    return <Provider value={{alert, setAlert}}>
        {props.alert}
        {props.children}
    </Provider>
};

export default AlertContext;
export {AlertConsumer, AlertProvider};