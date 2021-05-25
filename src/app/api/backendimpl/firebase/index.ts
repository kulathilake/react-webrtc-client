import { Backend, BackendAttempt, BackendAuth, BackendExam, BackendStorage } from "../../backend.interface";

export default class FirebaseBackend implements Backend {
    accessToken!: string | null;
    auth!: BackendAuth;
    storage!: BackendStorage;
    exams!: BackendExam;
    attempt!: BackendAttempt;
    setAccessToken(token: string): void {
        throw new Error("Method not implemented.");
    }
    
}