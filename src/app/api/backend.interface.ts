import { Attempt } from "../common/interfaces/attempt.interface";
import { Candidate } from "../common/interfaces/candidate.interface";
import { Exam } from "../common/interfaces/exam.interface";
import {AuthProvider} from "../common/interfaces/provider.types";
import { User, UserProfile } from "../common/interfaces/user.interface";

export interface Backend {
    accessToken: string | null;
    auth: BackendAuth;
    storage: BackendStorage;
    exams: BackendExam;
    attempt: BackendAttempt;
};

// Backend Essentials.
interface BackendAuth {
    signup(email:string, password: string): Promise<User>,
    federatedSignup(provider: AuthProvider): Promise<User>,
    login(email: string, password: string): Promise<User>,
    federatedLogin(provider: AuthProvider): Promise<User>
    logout():void,
    reset(email: string): Promise<any>,
    resetConfirm(email: string, code: string): Promise<any>,
    confirmEmail(code:string,email:string): Promise<any>,
    refresh(token: string): Promise<any>,
    changePassword(oldPassword: string, newPassword: string): Promise<any>
    current: {
        user(): User,
        userProfile(): UserProfile;
        session(): any;
    }
}

export interface BackendStorage {
    putFile(file: Blob): Promise<any>,
    getFile(key: string): Promise<Blob>,
    deleteFile(key: string): Promise<any>,
    patchFile(key:string, file: Blob): Promise<any>
}

export interface BackendExam {
    getExam(examId: string): Promise<Exam>;
    getExams(last: Exam): Promise<Exam[]>;
    createNewExam(): Promise<Exam>; 
    updateExam(id:string, exam: Exam): Promise<void>;
    deleteExam(id: Exam): Promise<void>;
    getExamCandidates(examId: string, last: Candidate): Promise<Candidate[]>;
    changeCandidateStatus(candidate: Candidate): Promise<void>;
    
}


export interface BackendAttempt {
    getAttempt(email:string, otp: string, signedString: string): Promise<Attempt>; 
    getExamSecret(attempt: Attempt, candidate: Candidate): Promise<JSON>;
    checkSystemClock(timestamp: number): Promise<string>;
    submitAttempt(attempt: Attempt): Promise<void>;
}
