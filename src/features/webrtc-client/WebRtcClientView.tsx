import { WebRtcClientProps } from "./types";
import withInjectedProps from "./components/withInjectedProps";
import MediaViewer from "./components/MediaViewer";
import WebRTCPeerConn from "./helpers/peer-connection";
import { useEffect, useRef, useState } from "react";


export function WebRtcClientView(props: WebRtcClientProps){
    const [connRef,setConnRef] = useState<WebRTCPeerConn>();
    useEffect(()=>{
        const conn = new WebRTCPeerConn({
            event: 'xxx',
            reciever: props.recipient,
            sender: {username:'xxxx',permissions:[]}
        });
        const stream = new MediaStream();
        conn.addStream(stream);
        setConnRef(conn);
    },[props]);
    
        return (
            <>
                {connRef&&<MediaViewer muted={true} addStream={connRef?.addStream!}/>}
            </>
        )
    
};

export default withInjectedProps<WebRtcClientProps>(WebRtcClientView);