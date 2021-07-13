import { User } from "../../../common/types/user";
import { OnMessageCallback, SendSignal, SignallingConfig } from "../types";
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
  
    async send(data: SendSignal):Promise<void>{
        throw new Error("Method not implemented");
    }

}