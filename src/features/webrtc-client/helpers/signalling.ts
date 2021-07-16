import { User } from "../../../common/types/user";
import { Init, OnMessageCallback, Send, SignallingConfig } from "../types";
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
            this.connection.onmessage = (event: MessageEvent<OnMessageCallback>) => {
                console.log(event.data);
                config.onMessageCallback({
                    candidate: event.data.candidate,
                    desc: event.data.desc
                })
            };
            // this.connection.onopen = console.log;
            this.connection.onerror = console.log;
            this.connection.onopen = (e)=>{
                this.init();
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

    init():void{
        this.send<Init>({
            type: 'init',
            payload: {
                eventId: this.event,
                receiever: this.reciever,
                sender: this.sender
            }
        });
    }

}