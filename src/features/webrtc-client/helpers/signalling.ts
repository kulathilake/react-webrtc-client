import { User } from "../../../common/types/user";
import { OnMessageCallback, Send, SignallingConfig } from "../types";
const url = process.env.REACT_APP_STUN_URL || 'wss://echo.websocket.org';

export default class Signalling {
    private user: User;
    private connection: WebSocket = new WebSocket(url);

    constructor(config:SignallingConfig){
        this.user = config.user;
        this.connection.onmessage = (event: MessageEvent<OnMessageCallback>) => {
            config.onMessageCallback({
                candidate: event.data.candidate,
                desc: event.data.desc
            })
        };
    }
  
    async send<T>(data: Send<T>):Promise<void>{
        console.log(data);
    }

}