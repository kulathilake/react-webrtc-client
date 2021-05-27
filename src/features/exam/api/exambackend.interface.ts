import { Candidate } from "../../../app/common/interfaces/candidate.interface";
import { Exam, ExamQuestion } from "../../../app/common/interfaces/exam.interface";
import { ExamListItem, ExamQuestionListItem } from "../../../app/common/types/exam.types";

export interface ExamBackend  {
    getExam(id: string): Promise<ExamListItem>;
    getExams(page?:number, offset?: number): Promise<ExamListItem[]>;
    getQuestion(id: string): Promise<ExamQuestionListItem>;
    getExamQuestions(id: string, page?: number, offset?: number): Promise<ExamQuestionListItem[]>;
    createNewExam(exam: Exam): Promise<Exam>; 
    updateExam(id:string, exam: Exam): Promise<void>;
    deleteExam(id: Exam): Promise<void>;
    getExamCandidates(examId: string, last: Candidate): Promise<Candidate[]>;
    changeCandidateStatus(candidate: Candidate): Promise<void>;
    
}
