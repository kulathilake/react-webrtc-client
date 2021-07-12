import { Roles } from "../../common/types/auth";
import MainStreamView from "../main-stream/FeatureMainView";
import { StreamProvider } from "../main-stream/types";

export default function Test(){
    return <MainStreamView 
        link ="https://www.youtube.com/embed/Wl_zEv8VRBg"
        provider= {StreamProvider.YOUTUBE}
        role={Roles.ADMIN}
        title="Sample"
        width={1000}
    />
}