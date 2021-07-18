import { useEffect, useState } from "react";
import { Roles } from "../../common/types/auth";
import MainStreamGenerator from "../main-stream/components/MainStreamGenerator";
import { StreamProvider } from "../main-stream/types";


export default function Test(){
    const [stream,setStream] = useState<MediaStream>();
    
    useEffect(()=>{
        navigator.mediaDevices.getUserMedia({
            audio: true,
            video: true
        })
        .then(stream=>{
            setStream(stream);
        });
    },[])

    return <MainStreamGenerator
        incoming={[
            {
                name: 'test-stream',
                stream: stream!,
                type: 'opposer'
            }
        ]}
        provider={StreamProvider.YOUTUBE}
        role= {Roles.ADMIN}
    />
    
}