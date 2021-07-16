import { User } from "../../../common/types/user";

export type WebRtcClientWrapperProps = {}
export type WebRtcClientProps = WebRtcClientWrapperProps & {
    recipient: User;
};

export type MediaViewerProps = {
    muted: boolean,
    addStream: (stream: MediaStream) => void;
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
}
export type SignallingConfig = WebRTCPeerConnConfig & {
    onMessageCallback: (data:InboundSignal<any>) => Promise<void>
}

// 2 Way Signals
export type PeerICEExchange = {
    candidate: RTCIceCandidate;
    to: string;
    from: string;
}

export type PeerICESession = {
    description: RTCSessionDescription;
    to: string;
    from: string;
}
// Outbound Signals
export type Send<T> = {
    type: 'candidate' | 'description' | 'init' | 'terminate' | 'info';
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


