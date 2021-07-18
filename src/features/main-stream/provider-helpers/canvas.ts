import { CanvasElement } from "../../webrtc-client/types";

export function getCanvasStream(canvas: CanvasElement){
    return canvas.captureStream(25);
}