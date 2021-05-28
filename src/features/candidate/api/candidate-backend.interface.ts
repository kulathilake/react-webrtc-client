import { CandidateEnrollmentDTO, CandidateDTO } from "../../../app/common/types/candidate.types";

export interface ICandidateBackend {
    getCandidate(id: string, cipher: string): Promise<CandidateDTO>;
    getStringToSign(): Promise<string>;
    enroll(candidate: CandidateEnrollmentDTO): Promise<CandidateDTO>;
    unenroll(candidate: CandidateDTO): Promise<void>;
}