import { User } from "../../../common/types/user";
import { InboundSignal, Init, Send, SignallingConfig } from "../types";
const url = process.env.REACT_APP_SIGNALLING_SERVER_URL || 'ws://localhost:8080';

export default class Signalling {
    private sender: User;
    private reciever: User;
    private event: string;
    private connection: WebSocket = new WebSocket(url);

    constructor(config:SignallingConfig){
        this.sender = config.sender;
        this.reciever = config.reciever;
        this.event = config.event;
        if(this.connection){
            this.connection.onmessage = (event: MessageEvent) => {
                try{
                    const data = JSON.parse(event.data) as InboundSignal<any>;
                    config.onMessageCallback(data);
                } catch (error) {
                    console.log(error);
                }   
            };
            // this.connection.onopen = console.log;
            this.connection.onerror = console.log;
            this.connection.onopen = (e)=>{
                this.send<Init>({
                    type: 'init',
                    payload: {
                        eventId: this.event,
                        receiever: this.reciever,
                        sender: this.sender,
                    }
                })
            }
        }
    }
  
    async send<T>(data: Send<T>):Promise<void>{
        try{
            this.connection.send(JSON.stringify(data));
        } catch (error) {
            console.log(error);
        }
    }

}