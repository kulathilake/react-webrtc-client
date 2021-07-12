import { MainStreamViewProps } from "./types";
import MainStreamWrapper from "./components/MainStreamWrapper";
import MainStreamControlPanel from "./components/MainStreamControlPanel";

export function MainStreamView(props: MainStreamViewProps){
    return (
        <div>
            <iframe 
                title={props.title}
                src={props.link}
                width={props.width || 500} 
                height={props.height || 300}
                allowFullScreen={props.allowFullscreen}
            />
            {/* Control Panel */}
            <MainStreamControlPanel {...props}/>
        </div>
    );
};

export default MainStreamWrapper<MainStreamViewProps>(MainStreamView);
