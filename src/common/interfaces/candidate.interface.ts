import { CandidateStatus } from "../types/candidate.types";
import { Exam } from "./exam.interface";

export interface Candidate {
    id: string;
    exam: Exam;
    email: string;
    otp: string;
    stringToSign: string;
    signature: string;
    status: CandidateStatus;
    getStringToSign(): string;
    getCandidateKey(): Promise<JSON>;
    sign(key: string): Promise<void>;
}

export interface VerifiedCandidate extends Candidate {
    // TODO: A trustworthy candidate with measures to prove the identity
    // eg: Photos of the the candidates themselves, Device Information etc.
};

    