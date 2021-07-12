export type MainStreamViewProps =  MainStreamWrapperProps & {
    link: string;
    title: string;
    width?: number;
    height?: number;
}
export type MainStreamWrapperProps = {
    provider: StreamProvider
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