import { OnMessageCallback } from "../types";

const config: RTCConfiguration = {
    iceServers: [
        {
            urls: 'stuns:stun.example.org'
        }
    ]
}

export const pc = new RTCPeerConnection(config);

pc.onicecandidate = ({candidate})=>{
    // TODO send candidate to peer through signalling server
}

pc.onnegotiationneeded = async () => {
    try {
        await pc.setLocalDescription( await pc.createOffer());
        // TODO send local description to peer through signalling server
    } catch (error) {
        throw new Error("Connection Negotiation Error");
    }
}

/** Callback for signalling recieves a message from a peer */
export async function onMessageCallback({candidate,desc,stream}:OnMessageCallback){
    try{
        if(desc){
            if(desc.type === 'offer'){
                await pc.setRemoteDescription(desc);
            } else if (desc.type === 'answer') {
                await pc.setRemoteDescription(desc);
            } else {
                throw new Error("Unsupported Description")
            }
    
        }else if(candidate){
            await pc.addIceCandidate(candidate);
        }
    } catch (error) {
        throw error;
    }
}

export function addStream(stream: MediaStream) {
    try{
        stream.getTracks().forEach(track => {
            pc.addTrack(track,stream);
        })
    } catch (error) {
        throw error;
    }
}
 