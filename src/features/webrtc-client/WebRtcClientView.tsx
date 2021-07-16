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
            const stream = new MediaStream();
            conn.addStream(stream);
            setConnRef(conn);
        }
    },[send]);

    const addStreamStub = (stream: MediaStream) => {}
    
        return (
            <>
            <input onChange={e=>setSender(e.target.value)}/>
            <input onChange={e=>setReciever(e.target.value)}/>
            <button onClick={()=>setSend(true)}>Send</button>
                {connRef&&<MediaViewer muted={true} addStream={addStreamStub}/>}
            </>
        )
    
};

export default withInjectedProps<WebRtcClientProps>(WebRtcClientView);