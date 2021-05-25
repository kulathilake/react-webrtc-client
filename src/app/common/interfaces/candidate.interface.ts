export interface Candidate {
    id: string;
    email: string;
    otp: string;
    stringToSign: string;
    cipher: string;
    status: CandidateStatus;
    setCipher(key: string): void;
}

export enum CandidateStatus {
    PENDING,
    APPROVED,
    REJECTED
}