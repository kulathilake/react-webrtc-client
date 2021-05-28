
export type CandidateDTO = {
    id: string;
    examId: string;
    email: string;
    status: CandidateStatus;
    stringToSign: string;
}

export enum CandidateStatus {
    PENDING,
    APPROVED,
    REJECTED
}

export type CandidateEnrollmentDTO = {
    examId: string;
    email: string;
    stringToSign: string;
    signature: string;
}