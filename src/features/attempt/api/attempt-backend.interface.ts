import { Attempt } from "../../../app/common/interfaces/attempt.interface";

export interface BackendAttempt {
    /**
     * Initiates an Attempt Session for a valid 
     * candidate and an eligible examination.
     * @param email string
     * @param otp string
     * @param stringToSign string
     * @param signedString string 
     */
    getAttemptSession(email:string, otp: string, stringToSign: string, signedString: string): Promise<Attempt>; 
    
    /**
     * Requests the secret key to decrypt the examination questions
     * @param email string
     * @param otp string
     * @param stringToSign string 
     * @param signedString string
     */
    getExamSecret(email:string, otp: string, stringToSign: string, signedString: string): Promise<string|null>;

    /**
     * Reports the system time to be checked against a remote time-server.
     * @param timestamp string
     */
    reportSystemTime(timestamp: number): Promise<string>;

    /**
     * Submits the Answers.
     * @param attempt 
     */
    submitAttempt(attempt: Attempt): Promise<void>;

    /**
     * Starts listening on duplex comm. channel to sync the examination process.
     */
    listenOnSocket(): Promise<void>;
}
