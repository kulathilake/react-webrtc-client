import { CandidateEnrollmentDTO, CandidateDTO } from "../../../app/common/types/candidate.types";

export default interface ICandidateBackend {
    /**
     * Fetches the Candidate DTO for a given ID and a Signature 
     * To provided by a candidate.
     * @param id string
     * @param signature string 
     */
    getCandidate(id: string, signature: string): Promise<CandidateDTO>;
    
    /**
     * Creates a Candidate linked to an examination.
     * @param candidate CandidateEnrollementDTO
     */
    enroll(candidate: CandidateEnrollmentDTO): Promise<CandidateDTO>;

    /**
     * Removed a Candidate from an Examination.
     * @param id string
     * @param signature string 
     */
    unenroll(id: string, signature: string): Promise<void>;
}