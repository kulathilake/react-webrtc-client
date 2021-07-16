import { User } from "../../../common/types/user";

export type ZoomClientViewProps = ZoomClientWrapperProps & {

};
export type ZoomClientWrapperProps = {
    createMeeting: () => Promise<ZoomMeeting>;
    joinMeeting: ()=> void;
}

export type ZoomMeeting = {
    id: string;
    passcode: string;
    date: Date;
    host: User;
}