import { useEffect, useRef } from "react";
import { MainStreamControlPanelProps, MainStreamGeneratorProps } from "../types";
import MainStreamControlPanel from "./MainStreamControlPanel";
import MainStreamWrapper from "./MainStreamWrapper";

export function MainStreamGenerator(props: MainStreamGeneratorProps){
    const canvasRef = useRef<HTMLCanvasElement|null>(null);
    const ctx = canvasRef.current?.getContext('2d');
    useEffect(()=>{
        if(ctx){
            
        }
    },[ctx]);

    useEffect(()=>{
        props.incoming.forEach((incomingVid)=>{
            console.log(incomingVid);
        })
    },[props.incoming])

    return (
        <div>
            {/* Video Canvas */}
            <canvas ref={canvasRef} onCutCapture={console.log}>

            </canvas>        
            {/* Control Panel */}
            <MainStreamControlPanel {...props as MainStreamControlPanelProps}/>            
        </div>
    )
}

export default MainStreamWrapper<MainStreamGeneratorProps>(MainStreamGenerator)