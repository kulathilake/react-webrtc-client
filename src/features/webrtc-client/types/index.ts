import { User } from "../../../common/types/user";

export type WebRtcClientWrapperProps = {}
export type WebRtcClientProps = WebRtcClientWrapperProps & {
    recipient: User;
};

export type MediaViewerProps = {
    muted: boolean,
    remote?:boolean,
    remoteStream?: MediaStream | null;
    addStream?: (stream: MediaStream) => void;
}

export type AudioMonitorProps = {
    stream: MediaStream;
}

export type OnMessageCallback = {
    desc?: RTCSessionDescription;
    candidate?: RTCIceCandidate;
}

export type WebRTCPeerConnConfig = {
    sender: User;
    reciever: User;
    event: string;
    onRemoteStream: (stream: MediaStream) => void;
    onError?: <T extends Error>(error: T) => void;
}
export type SignallingConfig = Omit<WebRTCPeerConnConfig,'onRemoteStream' | 'onError'> & {
    onMessageCallback: (data:InboundSignal<any>) => Promise<void>
}

// 2 Way Signals
export type PeerICEExchange = {
    candidate: RTCIceCandidate;
    to: string;
    from: string;
}

export type PeerSessionExchange = {
    session: RTCSessionDescriptionInit;
    to: string;
    from: string;
}
// Outbound Signals
export type Send<T> = {
    type: 'candidate' | 'desc' | 'init' | 'terminate' | 'info';
    payload?: T ; 
}

export type Init = {
    eventId: string;
    sender: User;
    receiever: User;
}

//Inbound Signals
export type InboundSignal<T> = {
    type: 'candidate' | 'desc' | 'connection' | 'info';
    payload: T;
}

export type PeerConnection = {
    user: string;
    state: 'ready' | 'pending' | 'disconnected' | 'connected';
}


