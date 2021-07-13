import { useEffect, useState } from "react"
import { MediaViewerProps } from "../types";
import AudioMonitor from "./AudioMonitor";

export default function MediaViewer(props: MediaViewerProps){
    const [stream,setStream] = useState<MediaStream|null>(null);
    useEffect(()=>{
        navigator.mediaDevices.getUserMedia(
            {
                video:true, 
                audio:{
                    echoCancellation: true,
                    noiseSuppression: true,
                    autoGainControl: false 
                }}
            )
        .then(stream => {
            props.addStream(stream);
            setStream(stream);
        })
        .catch(error => {
            console.log(error);
        })
    },[props]);
    return (
        <div>
            {stream&&
                <video ref={video=> {
                    if(video){
                        video.srcObject = stream
                    }
                }}
                autoPlay={true}
                muted={props.muted}
                />
            }
            {/* Audio Monitor */}
            <AudioMonitor stream={stream!} />
            {/* Recording Controllers */}
            
        </div>
    )
}