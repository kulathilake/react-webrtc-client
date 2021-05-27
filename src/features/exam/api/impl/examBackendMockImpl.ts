import { Candidate } from "../../../../app/common/interfaces/candidate.interface";
import { Exam, ExamQuestion } from "../../../../app/common/interfaces/exam.interface";
import { ExamListItem, ExamQuestionListItem } from "../../../../app/common/types/exam.types";
import { ExamBackend } from "../exambackend.interface";
import data from './mock-data.json'

export default class ExamBackendMockImpl implements ExamBackend {
    private db: any = {
        ...data
    }
    
    
    getExam(id: string): Promise<ExamListItem> {
        return new Promise((res,rej)=>{
            let item = this.db.exams.find((e:ExamListItem)=>e.id===id);
            if(!!item){
                res(item as ExamListItem)
            }else {
                rej(new Error('Item Not Found'))
            }
        });
    }
    getExams(page?: number, offset?: number): Promise<ExamListItem[]> {
        return new Promise(res=>res(this.db.exams.map((e: any) =>(e as ExamListItem))));
    }
    getQuestion(id: string): Promise<ExamQuestionListItem> {
        return new Promise((res,rej)=>{
            let item = this.db.questions.find((e:ExamQuestionListItem)=>e.id===id);
            if(!!item){
                res(item as ExamQuestionListItem)
            }else {
                rej(new Error('Item Not Found'))
            }
        });
    }
    getExamQuestions(id: string, page?: number, offset?: number): Promise<ExamQuestionListItem[]> {
        return new Promise((res,rej)=>{
            let items = this.db.questions.filter((e:ExamQuestionListItem)=>e.examId===id);
            if(!!items){
                res(items as ExamQuestionListItem[])
            }else {
                rej(new Error('Item Not Found'))
            }
        });
    }
    createNewExam(exam: Exam): Promise<Exam> {
        return new Promise((res, rej) => {
            this.db.exams.push(exam);
        })
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
