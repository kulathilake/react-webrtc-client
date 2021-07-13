import { OnMessageCallback } from "../types";

export default class Signalling {
    async send():Promise<void>{
        throw new Error("Method not implemented");
    }

    async onMessage(callback:(args:OnMessageCallback)=>void){
        throw new Error("Method not implemented");
    }

}