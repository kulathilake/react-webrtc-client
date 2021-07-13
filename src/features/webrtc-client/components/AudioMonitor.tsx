/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { AudioMonitorProps } from "../types";

const audioCtx = new AudioContext();
const analyser = audioCtx.createAnalyser();
analyser.fftSize = 2048;
let bufferSize = analyser.frequencyBinCount;
let dataArray = new Uint8Array(bufferSize);

export default function AudioMonitor(props:AudioMonitorProps){
    const [level,setLevel] = useState<number>(0);

    const visualize = () => {
        requestAnimationFrame(visualize);
        analyser.getByteFrequencyData(dataArray);
        const maxLevel = Math.max(...Array.from(dataArray));
        setLevel(maxLevel);
    }

    const connectAudio = () => {
        const source = audioCtx.createMediaStreamSource(props.stream);
        source.connect(analyser);
        audioCtx.resume();
        visualize(); 
    }

    const disconnectAudio = () => {
        setLevel(0);
        audioCtx.suspend();
    }

    return (
        <>
        <p>{level}</p>
        <button onClick={connectAudio}>Connect Audio</button>
        <button onClick={disconnectAudio}>Disconnect Audio</button>
        </>
    );
}