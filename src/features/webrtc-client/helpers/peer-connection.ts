import { User } from "../../../common/types/user";
import { InboundSignal, Init, OnMessageCallback, PeerConnection, PeerICEExchange, WebRTCPeerConnConfig } from "../types";
import Signalling from "./signalling";
const config: RTCConfiguration = {
    iceServers: [
        {urls: 'stun:sip1.lakedestiny.cordiaip.com'}
    ],
}

export default class WebRTCPeerConn {
    private pc: RTCPeerConnection;
    signal: Signalling;
    sender: User;
    reciever: User;
    connReady: boolean;
    constructor(webrtcConfig:WebRTCPeerConnConfig){
        this.pc = new RTCPeerConnection(config);
        this.sender = webrtcConfig.sender;
        this.reciever = webrtcConfig.reciever;
        this.connReady = false;
        this.signal = new Signalling({
            sender: webrtcConfig.sender,
            reciever: webrtcConfig.reciever,
            event: webrtcConfig.event,
            onMessageCallback: this.onMessageCallback.bind(this)
        })
        
        this.pc.onicecandidate = ({candidate})=>{
            if(candidate){
               this.signal.send<PeerICEExchange>({
                type: "candidate",
                payload: {
                    candidate: candidate,
                    from: this.sender.username,
                    to: this.reciever.username
                }
            });
            }
        }
        
        this.pc.onnegotiationneeded = async () => {
            try {
                console.log("ON NEG");
                await this.pc.setLocalDescription( await this.pc.createOffer());
                // TODO send local description to peer through signalling server
            } catch (error) {
                throw new Error("Connection Negotiation Error");
            }
        };


        /** Method bindings */
        this.addStream = this.addStream.bind(this);
        // Bindings for onMessageCallback is in the constructor of the signal.
    }

    private async onMessageCallback(data:InboundSignal<any>){
        try{
             switch(data.type){
                    case "connection":
                        const connData : InboundSignal<PeerConnection> = data;
                        
                        if(connData.payload.state === 'ready'){
                            this.connReady = true;
                        }else if (connData.payload.state === 'pending') {

                        } else if (connData.payload.state === 'disconnected') {

                        } else if(connData.payload.state === 'connected'){

                        } else {
                         console.error("Unknown");
                         console.log(connData);
                        }
                        break;
                    case "candidate":
                        await this.pc.addIceCandidate(data.payload.candidate as RTCIceCandidate);
                        break;
                    case "desc":
                        const descData: InboundSignal<RTCSessionDescription> = data;
                        if(descData.payload.type === 'offer'){
                            await this.pc.setLocalDescription(await this.pc.createAnswer());
                        } else if (descData.payload.type === 'answer') {
                            await this.pc.setRemoteDescription(descData.payload);
                        } else {
                            throw new Error("Unsupported Description")
                        }
                        break;
                    case "info":
                        console.log(data.payload);
                        break;
                }
          
        } catch (error) {
            throw error;
        }
    }

    /**Callback to add local media tracks to the peer connections */
    addStream(stream: MediaStream) {
        try{
            stream.getTracks().forEach(track => {
                this.pc.addTrack(track,stream)
            });
            this.pc.createOffer({
                offerToReceiveAudio: true,
                offerToReceiveVideo: true
            })
        } catch (error) {
            console.log(error);
        }
    };

}



/** Callback for signalling recieves a message from a peer */




 