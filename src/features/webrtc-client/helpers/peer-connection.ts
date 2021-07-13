import { User } from "../../../common/types/user";
import { OnMessageCallback } from "../types";
import Signalling from "./signalling";
const config: RTCConfiguration = {
    iceServers: [
        {
            urls: 'stuns:stun.example.org'
        }
    ]
}

export default class WebRTCPeerConn {
    private pc: RTCPeerConnection;
    signal: Signalling;
    constructor(user:User){
        this.pc = new RTCPeerConnection(config);
        this.signal = new Signalling({
            user: user,
            onMessageCallback: this.onMessageCallback
        })
        this.pc.onicecandidate = ({candidate})=>{
            if(candidate){
                this.signal.send({
                    type: "candidate",
                    payload: candidate!
                });
            }
        }
        
        this.pc.onnegotiationneeded = async () => {
            try {
                await this.pc.setLocalDescription( await this.pc.createOffer());
                // TODO send local description to peer through signalling server
            } catch (error) {
                throw new Error("Connection Negotiation Error");
            }
        }
        
        /** Method bindings */
        this.addStream = this.addStream.bind(this);
    }

    private async onMessageCallback({candidate,desc}:OnMessageCallback){
        try{
            if(desc){
                if(desc.type === 'offer'){
                    await this.pc.setRemoteDescription(desc);
                } else if (desc.type === 'answer') {
                    await this.pc.setRemoteDescription(desc);
                } else {
                    throw new Error("Unsupported Description")
                }
        
            }else if(candidate){
                await this.pc.addIceCandidate(candidate);
            }
        } catch (error) {
            throw error;
        }
    }

    addStream(stream: MediaStream) {
        try{
            stream.getTracks().forEach(track => {
                console.log(this);
                this.pc.addTrack(track,stream);
            })
        } catch (error) {
            console.log(error);
        }
    }

}



/** Callback for signalling recieves a message from a peer */




 