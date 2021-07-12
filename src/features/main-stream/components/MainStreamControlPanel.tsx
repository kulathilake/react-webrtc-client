import { Roles } from "../../../common/types/auth";
import { MainStreamControlPanelProps } from "../types";

export default function MainStreamControlPanel(props: MainStreamControlPanelProps){
    if(props.role === Roles.ADMIN || props.role === Roles.MODERATOR){
        return (
        <div>
            <h1>Live Stream Controls</h1>
            <button onClick={props.startTestTransmission}>Test</button>
            <button onClick={props.startLiveTransmission}>Go Live</button>
            <button onClick={props.stopTransmission}>End</button>
        </div>
        )
    } else {
        return null
    }
}