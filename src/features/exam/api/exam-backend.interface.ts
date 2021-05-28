import { CandidateDTO, CandidateStatus } from "../../../app/common/types/candidate.types";
import { ExamDTO, QuestionDTO } from "../../../app/common/types/exam.types";

export interface IExamBackend  {
    /**
     * Fetches an Examination with a Given ID.
     * Authorized with access token in the backend.
     * @param id string
     */
    getExam(id: string): Promise<ExamDTO>;

    /**
     * Gets a list examinations owned by the token owner.
     * Authorized with access token in the backend.
     * @param page number 
     * @param offset number
     */
    getExams(page?:number, offset?: number): Promise<ExamDTO[]>;

    /**
     * Fetches a Question by its ID.
     * Authorized with access token in the backend
     * @param id string
     */
    getQuestion(id: string): Promise<QuestionDTO>;

    /**
     * Gets a list of Questions belonging to an examination.
     * Authorized with access token in the backend.
     * @param id string
     * @param page number
     * @param offset number
     */
    getExamQuestions(id: string, page?: number, offset?: number): Promise<QuestionDTO[]>;

    /**
     * Creates a new Examination for a given user.
     * @param exam ExamDTO
     */
    createNewExam(exam: ExamDTO): Promise<ExamDTO>; 

    /**
     * Creates  new Question for a given Examination
     * @param question QuestionDTO
     */
    createNewQuestion(question: QuestionDTO): Promise<void>;

    /**
     * Updates an Examination Details
     * @param exam ExamDTO
     */
    updateExam(exam: ExamDTO): Promise<ExamDTO>;

    /**
     * Updates a Question.
     * @param question QuestionDTO
     */
    updateQuestion(question: QuestionDTO): Promise<QuestionDTO>

    /**
     * Deletes an Examination will all its Questions.
     * @param id string
     */
    deleteExam(id: string): Promise<void>;

    /**
     * Deletes an Examination Question by ID.
     * @param id string
     */
    deleteExamQuestion(id: string): Promise<void>;

    /**
     * Lists all the Candidates of an Examination.
     * @param examId string
     * @param page number
     * @param offset number
     */
    getExamCandidates(examId: string, page?: number, offset?: number ): Promise<CandidateDTO[]>;

    /**
     * Changes an Examination Candidate's Status with a given status
     * @param id string
     * @param status CandidateStatus
     */
    changeCandidateStatus(id: string, status: CandidateStatus): Promise<CandidateDTO>;
    
}
