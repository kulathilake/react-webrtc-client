import { useEffect, useState } from "react"

export default function MediaViewer(){
    const [stream,setStream] = useState<MediaStream|null>(null);
    useEffect(()=>{
        navigator.mediaDevices.getUserMedia(
            {
                video:true, 
                audio:{
                    echoCancellation: true
                }}
            )
        .then(stream => {
            setStream(stream);
        })
        .catch(error => {
            console.log(error);
        })
    },[]);
    return (
        <div>
            {stream&&
                <video ref={video=> {
                    if(video){
                        video.srcObject = stream
                    }
                }}
                autoPlay={true}
                muted={true}
                />
            }
        </div>
    )
}