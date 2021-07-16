import { ZoomClientViewProps } from "./types";
import withInjectedProps from "./components/ZoomClientWrapper";

export function FeatureMainView(){
    return null;
};

export default withInjectedProps<ZoomClientViewProps>(FeatureMainView);