import React, { useEffect, useState } from "react";
import { Roles } from "../../../common/types/auth";
import { MainStreamViewProps, MainStreamWrapperProps, StreamProvider } from "../types";

/**
 * A Higher Order Component to inject props and more importantly 
 * Callbacks and Handler functions into UI components. These wrappers
 * will help keep the business logic seperated from UI level components
 * as conveniently as possible.
 */

/**
 * This generic function will accept React Components of type P and will inject Props from type
 * FeatureWrapperProps. Further more the wrapped function will not expose the injected props 
 * to other components which intend to use the said wrapped component, essentaily hiding the excess
 * implementation details.
 * @param Component 
 */
export default function withInjectedProps <P extends MainStreamViewProps>
(Component: React.ComponentType<P>):React.FC<Omit<P, keyof MainStreamWrapperProps>>{
    return function WrappedFeatureComponent(props){
        const [isAdmin,setIsAdmin] = useState(false);
        const [isModerator, setIsModerator] = useState(false);
        /**
         * Set the current vieweing mode based on user role.
         */
        useEffect(()=>{
            if(props.role === Roles.ADMIN) {
                setIsAdmin(true);
                setIsModerator(true);
            }else if (props.role === Roles.MODERATOR) {
                setIsAdmin(false);
                setIsModerator(true);
            } else {
                setIsAdmin(false);
                setIsModerator(false);
            }
        },[props]);

        /**
         * Main Stream Controls
         */
        const startTestTransmission = () => {
            if(!isAdmin || !isModerator) throw new Error("Unauthorized Action");
            switch(props.provider){
                case StreamProvider.YOUTUBE:
                    break;
                case StreamProvider.FACEBOOK:
                    break;
                case StreamProvider.ZOOM:
                    break;
            }
        };

        const startLiveTransmission = () => {
            if(!isAdmin || !isModerator) throw new Error("Unauthorized Action");
            switch(props.provider){
                case StreamProvider.YOUTUBE:
                    break;
                case StreamProvider.FACEBOOK:
                    break;
                case StreamProvider.ZOOM:
                    break;
            }
        };

        const stopTransmission = () => {
            if(!isAdmin || !isModerator) throw new Error("Unauthorized Action");
            switch(props.provider){
                case StreamProvider.YOUTUBE:
                    break;
                case StreamProvider.FACEBOOK:
                    break;
                case StreamProvider.ZOOM:
                    break;
            }
        };



        return(
            <Component {...(props as P)}
                startTestTransmission = {startTestTransmission}
                startLiveTransmission = {startLiveTransmission} 
                stopTransmission={stopTransmission}
                allowFullscreen={props.role === Roles.SPECTATOR}
                //Override props here.
            />
        )}
}