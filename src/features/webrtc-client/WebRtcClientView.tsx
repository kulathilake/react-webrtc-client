/* eslint-disable react-hooks/exhaustive-deps */
import { WebRtcClientProps } from "./types";
import withInjectedProps from "./components/withInjectedProps";
import MediaViewer from "./components/MediaViewer";
import WebRTCPeerConn from "./helpers/peer-connection";
import { useEffect, useState } from "react";


export function WebRtcClientView(props: WebRtcClientProps){
    const [connRef,setConnRef] = useState<WebRTCPeerConn>();
    const [sender,setSender] = useState('');
    const [reciever,setReciever] = useState('');
    const [send,setSend] = useState(false);

    useEffect(()=>{
        if(send){
            const conn = new WebRTCPeerConn({
                event: 'xxx',
                reciever: {username:reciever, permissions:[]},
                sender: {username: sender,permissions:[]}
            });
            setConnRef(conn);
        }
    },[send]);
    
        return (
            <>
            <input onChange={e=>setSender(e.target.value)}/>
            <input onChange={e=>setReciever(e.target.value)}/>
            <button onClick={()=>setSend(true)}>Send</button>
                {connRef&&<MediaViewer muted={true} addStream={connRef.addStream}/>}
            </>
        )
    
};

export default withInjectedProps<WebRtcClientProps>(WebRtcClientView);