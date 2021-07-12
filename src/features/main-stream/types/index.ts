import { Roles } from "../../../common/types/auth";

export type MainStreamViewProps =  MainStreamWrapperProps & {
    link: string;
    title: string;
    width?: number;
    height?: number;
}

export type MainStreamWrapperProps = {
    provider: StreamProvider;
    role: Roles
    startTestTransmission(): void;
    startLiveTransmission(): void;
    stopTransmission(): void;
};

export enum StreamProvider {
    YOUTUBE,
    FACEBOOK,
    ZOOM,
    MULTIPLE,
}

export type Stream = {
    link: string;
}