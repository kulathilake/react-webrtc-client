import { WebRtcClientProps } from "./types";
import withInjectedProps from "./components/withInjectedProps";
import MediaViewer from "./components/MediaViewer";

export function WebRtcClientView(props: WebRtcClientProps){
    return <MediaViewer/>
};

export default withInjectedProps<WebRtcClientProps>(WebRtcClientView);