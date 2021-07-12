import { MainStreamViewProps } from "./types";
import MainStreamWrapper from "./components/MainStreamWrapper";

export function MainStreamView(props: MainStreamViewProps){
    return (
        <iframe 
            title={props.title}
            src={props.link}
            width={props.width || 500} 
            height={props.height || 300}/>
    );
};

export default MainStreamWrapper<MainStreamViewProps>(MainStreamView);