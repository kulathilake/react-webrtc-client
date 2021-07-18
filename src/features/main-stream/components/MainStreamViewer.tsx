import {  MainStreamViewProps } from "../types";
import MainStreamWrapper from "./MainStreamWrapper";

export function MainStreamViewer(props: MainStreamViewProps){
    return (
        <div>
            <iframe 
                title={props.title}
                src={props.link}
                width={props.width || 500} 
                height={props.height || 300}
                allowFullScreen={props.allowFullscreen}
            />
        </div>
    );
};

export default MainStreamWrapper<MainStreamViewProps>(MainStreamViewer);
