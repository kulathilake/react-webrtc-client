/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { AudioMonitorProps } from "../types";

const audioCtx = new AudioContext();
const analyser = audioCtx.createAnalyser();
const gain = audioCtx.createGain();
analyser.fftSize = 2048;
let bufferSize = analyser.frequencyBinCount;
let dataArray = new Uint8Array(bufferSize);

export default function AudioMonitor(props:AudioMonitorProps){
    const [totalGain,setTotalGain] = useState<number>(0);
    const visualize = () => {
        requestAnimationFrame(visualize);
        analyser.getByteFrequencyData(dataArray);
        const gain = dataArray.reduce((i,j)=>{return i+j});
        setTotalGain(Math.log(gain));
        
    }
    useEffect(()=>{
        if(props.stream){
            const source = audioCtx.createMediaStreamSource(props.stream)
            source.connect(analyser);
            source.connect(gain);  
            visualize();         
        }
    },[props]);

    return (
        <p>{totalGain}</p>
    );
}