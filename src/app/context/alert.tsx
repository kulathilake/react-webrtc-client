import { createContext, useState } from "react";
const AlertContext = createContext<any>({});
const {Consumer: AlertConsumer, Provider} = AlertContext;

function AlertProvider(props: any) {
    const [alertContext,setAlertContext] = useState<any>({
        message: null,
        severity: null,
        show: false
    });

    return <Provider value={{alertContext, setAlertContext}}>
        {props.alert}
        {props.children}
    </Provider>
};

export default AlertContext;
export {AlertConsumer, AlertProvider};