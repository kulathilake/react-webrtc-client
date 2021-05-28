import { CandidateDTO, CandidateStatus } from "../../../app/common/types/candidate.types";
import { ExamDTO, QuestionDTO } from "../../../app/common/types/exam.types";

export interface ExamBackend  {
    getExam(id: string): Promise<ExamDTO>;
    getExams(page?:number, offset?: number): Promise<ExamDTO[]>;
    getQuestion(id: string): Promise<QuestionDTO>;
    getExamQuestions(id: string, page?: number, offset?: number): Promise<QuestionDTO[]>;
    createNewExam(exam: ExamDTO): Promise<ExamDTO>; 
    createNewQuestion(question: QuestionDTO): Promise<void>;
    updateExam(exam: ExamDTO): Promise<ExamDTO>;
    updateQuestion(question: QuestionDTO): Promise<QuestionDTO>
    deleteExam(id: string): Promise<void>;
    deleteExamQuestion(id: string): Promise<void>;
    getExamCandidates(examId: string, page?: number, offset?: number ): Promise<CandidateDTO[]>;
    changeCandidateStatus(id: string, status: CandidateStatus): Promise<CandidateDTO>;
    
}
