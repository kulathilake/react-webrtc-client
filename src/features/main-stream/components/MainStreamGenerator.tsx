import { useEffect, useRef } from "react";
import { MainStreamControlPanelProps, MainStreamGeneratorProps } from "../types";
import MainStreamControlPanel from "./MainStreamControlPanel";
import MainStreamWrapper from "./MainStreamWrapper";

export function MainStreamGenerator(props: MainStreamGeneratorProps){
    const canvasRef = useRef<HTMLCanvasElement|null>(null);
    const ctx = canvasRef.current?.getContext('2d');

    useEffect(()=>{
        if(ctx){
            ctx!.font = "30px Arial";
            ctx.fillText("hello",0,0);
        }
    },[ctx]);
    

    useEffect(()=>{
        props.incoming.forEach((vidin,i)=>{
            let video = document.createElement('video');
            video.setAttribute('autoplay','true');
            video.srcObject = vidin.stream;
            video.onplay = () => {
                (function step(){
                    ctx?.drawImage(video,(video.videoWidth/props.incoming.length)*i,0, video.videoWidth/props.incoming.length, video.videoHeight/props.incoming.length)
                    requestAnimationFrame(step)
                })()
            }
        })
    },[props.incoming,ctx]);

    return (
        <div >
            {/* Video Canvas */}
            <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight} onCutCapture={console.log}>
            </canvas>     
            {/* Control Panel */}
            <MainStreamControlPanel {...props as MainStreamControlPanelProps}/>            
        </div>
    )
}

export default MainStreamWrapper<MainStreamGeneratorProps>(MainStreamGenerator)