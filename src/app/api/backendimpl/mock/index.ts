import { Backend, BackendAuth, BackendStorage } from "../../backend.interface";
import MockAuthImpl from './mockAuthimpl';

export default class MockBackend implements Backend {
    public accessToken: string | null = null;
    auth: BackendAuth = new MockAuthImpl(this) ;
    storage: BackendStorage = {} as BackendStorage;
    
    setAccessToken(token:string){
        this.accessToken = token;
    }
}

