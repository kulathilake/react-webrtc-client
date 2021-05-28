
export type CandidateDTO = {
    id: string;
    examId: string;
    email: string;
    status: CandidateStatus;
}

export enum CandidateStatus {
    PENDING,
    APPROVED,
    REJECTED
}