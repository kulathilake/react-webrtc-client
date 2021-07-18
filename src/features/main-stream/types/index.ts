import { Roles } from "../../../common/types/auth";


export type MainStreamWrapperProps = {
    allowFullscreen?: boolean;
    startTestTransmission(): void;
    startLiveTransmission(): void;
    stopTransmission(): void;
};

export type MainStreamBase = MainStreamWrapperProps & {
    role: Roles
    provider: StreamProvider;
}

export type MainStreamViewProps =  MainStreamBase & {
    link: string;
    title: string;
    width?: number;
    height?: number;
}

export type MainStreamControlPanelProps = MainStreamBase & {

}

export type MainStreamGeneratorProps = MainStreamBase & {
    incoming: IncomingVideo[];
}
export type IncomingVideo = {
    stream: MediaStream,
    type: 'proposer' | 'opposer',
    name: string
}
export enum StreamProvider {
    YOUTUBE,
    FACEBOOK,
    ZOOM,
    MULTIPLE,
}

export type Stream = {
    link: string;
}