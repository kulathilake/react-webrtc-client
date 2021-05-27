import { Candidate } from "../../../../app/common/interfaces/candidate.interface";
import { Exam } from "../../../../app/common/interfaces/exam.interface";
import { ExamBackend } from "../exambackend.interface";


export default class ExamBackendMockImpl implements ExamBackend {
    
    getExam(examId: string): Promise<Exam> {
        throw new Error("Method not implemented.");
    }
    getExams(last: Exam): Promise<Exam[]> {
        throw new Error("Method not implemented.");
    }
    createNewExam(): Promise<Exam> {
        throw new Error("Method not implemented.");
    }
    updateExam(id: string, exam: Exam): Promise<void> {
        throw new Error("Method not implemented.");
    }
    deleteExam(id: Exam): Promise<void> {
        throw new Error("Method not implemented.");
    }
    getExamCandidates(examId: string, last: Candidate): Promise<Candidate[]> {
        throw new Error("Method not implemented.");
    }
    changeCandidateStatus(candidate: Candidate): Promise<void> {
        throw new Error("Method not implemented.");
    }

} 
