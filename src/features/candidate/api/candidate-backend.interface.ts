import { CandidateEnrollmentDTO, CandidateDTO } from "../../../app/common/types/candidate.types";

export default interface ICandidateBackend {
    getCandidate(id: string, signature: string): Promise<CandidateDTO>;
    enroll(candidate: CandidateEnrollmentDTO): Promise<CandidateDTO>;
    unenroll(id: string, signature: string): Promise<void>;
}