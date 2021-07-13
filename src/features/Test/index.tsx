import WebRtcClientView from "../webrtc-client/WebRtcClientView";

export default function Test(){
    return <WebRtcClientView 
        recipient = {{
            username: 'xxxx',
            permissions: [],
        }}
    />
    
}