import { WebRtcClientProps } from "./types";
import withInjectedProps from "./components/withInjectedProps";
import MediaViewer from "./components/MediaViewer";
import WebRTCPeerConn from "./helpers/peer-connection";


export function WebRtcClientView(props: WebRtcClientProps){
    
    const conn = new WebRTCPeerConn(props.recipient);
    const stream = new MediaStream();
    conn.addStream(stream);
    return (
        <>
            <MediaViewer muted={true} addStream={conn.addStream}/>
        </>
    )
};

export default withInjectedProps<WebRtcClientProps>(WebRtcClientView);