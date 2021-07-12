import { Roles } from "../../../common/types/auth";

export type MainStreamViewProps =  MainStreamWrapperProps & {
    link: string;
    provider: StreamProvider;
    role: Roles
    title: string;
    width?: number;
    height?: number;
}

export type MainStreamWrapperProps = {
    allowFullscreen?: boolean;
    startTestTransmission(): void;
    startLiveTransmission(): void;
    stopTransmission(): void;
};

export type MainStreamControlPanelProps = MainStreamWrapperProps & {
    role: Roles;
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