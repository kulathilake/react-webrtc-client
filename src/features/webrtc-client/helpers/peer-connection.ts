import { User } from "../../../common/types/user";
import { InboundSignal, PeerConnection, PeerICEExchange, PeerSessionExchange, WebRTCPeerConnConfig } from "../types";
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
    candidates: RTCIceCandidate[];
    remoteStream: MediaStream | null;
    handleError: <T extends Error>(error:T) => void;
    constructor(webrtcConfig:WebRTCPeerConnConfig){
        this.pc = new RTCPeerConnection(config);
        this.sender = webrtcConfig.sender;
        this.reciever = webrtcConfig.reciever;
        this.connReady = false;
        this.remoteStream = null;
        this.candidates = [];
        this.handleError = webrtcConfig.onError || console.error;
        this.signal = new Signalling({
            sender: webrtcConfig.sender,
            reciever: webrtcConfig.reciever,
            event: webrtcConfig.event,
            onMessageCallback: this.onMessageCallback.bind(this)
        });
        
        /** Send ICE Candidate information to peer */
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
        
        /** Creates an offer (as the offerrer) when a send media track is added. */
        this.pc.onnegotiationneeded = async () => {
            try {
                const offer =  await this.pc.createOffer();
                console.log(this.pc.signalingState);
                await this.pc.setLocalDescription( offer );
                // TODO send local description to peer through signalling server
                this.signal.send<PeerSessionExchange>({
                    type: 'desc',
                    payload: {
                        session: offer,
                        from: this.sender.username,
                        to: this.reciever.username
                    }

                });
            } catch (error) {
                this.handleError(error);
            };

        };

        /** Calls on RemoteStream handler when tracks are added */
        this.pc.ontrack = (event) => {
            this.remoteStream = event.streams[0];
            webrtcConfig.onRemoteStream(this.remoteStream);
        }   

        /** Add ICE candidates to connection if state is has remote-offers */
        this.pc.onsignalingstatechange = () => {
            if(this.pc.signalingState ==='have-remote-offer') {
                this.candidates.forEach(async candidate => {
                    await this.pc.addIceCandidate(candidate as RTCIceCandidate);
                });
            } 
        }

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
                         console.log(connData);
                        }
                        break;
                    case "candidate":
                        if(this.pc.signalingState === 'have-remote-offer'){
                            await this.pc.addIceCandidate(data.payload.candidate as RTCIceCandidate);
                        }else {
                            this.candidates.push(data.payload.candidate as RTCIceCandidate);
                        }
                        break;
                    case "desc":
                        const descData: InboundSignal<PeerSessionExchange> = data;
                        if(descData.payload.session.type === 'offer'){
                            /**
                             * Sets the remote description when a remote offer has been signalled
                             * and send the answer in return.
                             */
                            this.pc.setRemoteDescription(descData.payload.session)
                            .then(async ()=>{
                                console.log("Recieved Offer");
                                const answer = await this.pc.createAnswer(); 
                                await this.pc.setLocalDescription(answer);
                                console.debug("Sending Answer")
                                this.signal.send<PeerSessionExchange>({
                                    type: 'desc',
                                    payload: {
                                        session: answer,
                                        from: this.sender.username,
                                        to: this.reciever.username,
                                    }
                                });
                            })
                            .catch(this.handleError);
                            
                        } else if (descData.payload.session.type === 'answer') {
                            console.log("Recieved Answer");
                            try{
                                await this.pc.setRemoteDescription(descData.payload.session)
                            } catch (error) {
                                this.handleError(error);
                            }
                        } else {
                            throw new Error("Unsupported Description");
                        }
                        break;
                    case "info":
                        console.log(data.payload);
                        break;
                }
          
        } catch (error) {
            this.handleError(error);
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

    onPeerDisconnect(){

    }
}



/** Callback for signalling recieves a message from a peer */




 