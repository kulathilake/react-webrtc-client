import { CandidateDTO, CandidateStatus } from "../../../../app/common/types/candidate.types";
import { ExamDTO, QuestionDTO } from "../../../../app/common/types/exam.types";
import { IExamBackend } from "../exam-backend.interface";

export default class ExamBackendFirebaseImpl implements IExamBackend {
    getExam(id: string): Promise<ExamDTO> {
        throw new Error("Method not implemented.");
    }
    getExams(page?: number, offset?: number): Promise<ExamDTO[]> {
        throw new Error("Method not implemented.");
    }
    getQuestion(id: string): Promise<QuestionDTO> {
        throw new Error("Method not implemented.");
    }
    getExamQuestions(id: string, page?: number, offset?: number): Promise<QuestionDTO[]> {
        throw new Error("Method not implemented.");
    }
    createNewExam(exam: ExamDTO): Promise<ExamDTO> {
        throw new Error("Method not implemented.");
    }
    createNewQuestion(question: QuestionDTO): Promise<void> {
        throw new Error("Method not implemented.");
    }
    updateExam(exam: ExamDTO): Promise<ExamDTO> {
        throw new Error("Method not implemented.");
    }
    updateQuestion(question: QuestionDTO): Promise<QuestionDTO> {
        throw new Error("Method not implemented.");
    }
    deleteExam(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    deleteExamQuestion(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    getExamCandidates(examId: string, page?: number, offset?: number): Promise<CandidateDTO[]> {
        throw new Error("Method not implemented.");
    }
    changeCandidateStatus(id: string, status: CandidateStatus): Promise<CandidateDTO> {
        throw new Error("Method not implemented.");
    }
    
    
}