export interface Candidate {
    id: string;
    email: string;
    otp: string;
    stringToSign: string;
    cipher: string;
    status: CandidateStatus;
    setCipher(key: JSON): Promise<void>;
    isValidCipher(): Promise<boolean>;
}

export interface VerifiedCandidate extends Candidate {
    // TODO: A trustworthy candidate with measures to prove the identity
    // eg: Photos of the the candidates themselves, Device Information etc.
};

export enum CandidateStatus {
    PENDING,
    APPROVED,
    REJECTED
}