import { CandidateStatus } from "../types/candidate.types";
import { Exam } from "./exam.interface";

export interface Candidate {
    id: string;
    exam: Exam;
    email: string;
    otp: string;
    stringToSign: string;
    cipher: string;
    status: CandidateStatus;
    getCandidateKey(): Promise<JSON>;
    setCipher(key: JSON): Promise<void>;
    isValidCipher(): Promise<boolean>;
}

export interface VerifiedCandidate extends Candidate {
    // TODO: A trustworthy candidate with measures to prove the identity
    // eg: Photos of the the candidates themselves, Device Information etc.
};

    