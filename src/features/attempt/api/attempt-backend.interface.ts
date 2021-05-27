import { Attempt } from "../../../app/common/interfaces/attempt.interface";
import { Candidate } from "../../../app/common/interfaces/candidate.interface";

export interface BackendAttempt {
    getAttempt(email:string, otp: string, signedString: string): Promise<Attempt>; 
    getExamSecret(attempt: Attempt, candidate: Candidate): Promise<JSON>;
    checkSystemClock(timestamp: number): Promise<string>;
    submitAttempt(attempt: Attempt): Promise<void>;
}
