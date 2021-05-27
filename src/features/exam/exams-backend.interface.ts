import { Candidate } from "../../app/common/interfaces/candidate.interface";
import { Exam } from "../../app/common/interfaces/exam.interface";

export interface BackendExam {
    getExam(examId: string): Promise<Exam>;
    getExams(last: Exam): Promise<Exam[]>;
    createNewExam(): Promise<Exam>; 
    updateExam(id:string, exam: Exam): Promise<void>;
    deleteExam(id: Exam): Promise<void>;
    getExamCandidates(examId: string, last: Candidate): Promise<Candidate[]>;
    changeCandidateStatus(candidate: Candidate): Promise<void>;
    
}
