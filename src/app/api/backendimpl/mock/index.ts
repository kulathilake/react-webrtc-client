import { Backend, BackendAttempt,BackendAuth,BackendExam, BackendStorage } from "../../backend.interface";
import MockAuthImpl from './mockAuthimpl';

export default class MockBackend implements Backend {
    public accessToken: string | null = null;
    auth: BackendAuth = new MockAuthImpl(this) ;
    storage: BackendStorage = {} as BackendStorage;
    exams: BackendExam = {} as BackendExam;
    attempt: BackendAttempt = {} as BackendAttempt;
    
    setAccessToken(token:string){
        this.accessToken = token;
    }
}

