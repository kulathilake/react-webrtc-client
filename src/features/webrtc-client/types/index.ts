import { User } from "../../../common/types/user";

export type WebRtcClientWrapperProps = {}
export type WebRtcClientProps = WebRtcClientWrapperProps & {

};

export type MediaViewerProps = {
    muted: boolean
}

export type AudioMonitorProps = {
    stream: MediaStream;
}

export type OnMessageCallback = {
    desc?: RTCSessionDescription;
    candidate?: RTCIceCandidate;
}

export type SignallingConfig = {
    user: User;
    onMessageCallback: (data:OnMessageCallback) => void
}
export type SendSignal = {
    type: 'candidate' | 'description' ;
    payload?: RTCIceCandidate | RTCSessionDescription; 
}