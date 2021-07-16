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
    onMessageCallback: (data:OnMessageCallback) => void
}
export type Send<T> = {
    type: 'candidate' | 'description' | 'init' | 'terminate' | 'info';
    payload?: T ; 
}

export type Init = {
    eventId: string;
    sender: User;
    receiever: User;
}

export type Info<T> = Init & {
    message: T 
}