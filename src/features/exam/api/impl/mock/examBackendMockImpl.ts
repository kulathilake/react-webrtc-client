import { CandidateDTO, CandidateStatus } from "../../../../../app/common/types/candidate.types";
import { ExamDTO, QuestionDTO } from "../../../../../app/common/types/exam.types";
import { IExamBackend } from "../../exam-backend.interface";
import data from '../../../../../app/common/data/mock-data.json';

export default class ExamBackendMock implements IExamBackend {
   
    private db: any = {
        ...data
    }
    
    
    getExam(id: string): Promise<ExamDTO> {
        return new Promise((res,rej)=>{
            let item = this.db.exams.find((e:ExamDTO)=>e.id===id);
            if(!!item){
                res(item as ExamDTO)
            }else {
                rej(new Error('Item Not Found'))
            }
        });
    }
    getExams(page?: number, offset?: number): Promise<ExamDTO[]> {
        return new Promise(res=>res(this.db.exams.map((e: any) =>(e as ExamDTO))));
    }
    getQuestion(id: string): Promise<QuestionDTO> {
        return new Promise((res,rej)=>{
            let item = this.db.questions.find((e:QuestionDTO)=>e.id===id);
            if(!!item){
                res(item as QuestionDTO)
            }else {
                rej(new Error('Item Not Found'))
            }
        });
    }
    getExamQuestions(id: string, page?: number, offset?: number): Promise<QuestionDTO[]> {
        return new Promise((res,rej)=>{
            let items = this.db.questions.filter((e:QuestionDTO)=>e.examId===id);
            if(!!items){
                res(items as QuestionDTO[])
            }else {
                rej(new Error('Item Not Found'))
            }
        });
    }
    createNewExam(exam: ExamDTO): Promise<ExamDTO> {
        let id = 'xam-x-' + Math.floor(Math.random()*1000);
        return new Promise((res, rej) => {
            this.db.exams.push({...exam,id,status:'pending'});
            res(this.db.exams[this.db.exams.length -1]);
        })
    }
    createNewQuestion(question: QuestionDTO): Promise<void> {
        let id = 'xam-q-' + Math.floor(Math.random()*1000);
        return new Promise((res, rej) => {
            this.db.questions.push({...question,id});
            res(this.db.questions[this.db.questions.length -1]);
        })
    }
    updateExam(exam: ExamDTO): Promise<ExamDTO> {
        let id = exam.id;
        let index = this.db.exams.findIndex((e:ExamDTO) => e.id === id);
        this.db.exams[index] = exam;
        return new Promise(res=>{
            res(this.db.exams[index]);
        })
    }
    updateQuestion(question: QuestionDTO): Promise<QuestionDTO> {
        let id = question.id;
        let index = this.db.questions.findIndex((e:ExamDTO) => e.id === id);
        this.db.questions[index] = question;
        return new Promise(res=>{
            res(this.db.questions[index]);
        })
    }
    deleteExam(id: string): Promise<void> {
        return new Promise(res=>{
            this.db.exams.splice(id,1);
            res();
        })
    }
    deleteExamQuestion(id: string): Promise<void> {
        return new Promise(res=>{
            this.db.questions.splice(id,1);
            res();
        })
    }
    getExamCandidates(examId: string, page?: number, offset?: number): Promise<CandidateDTO[]> {
        return new Promise(res=>{
            res(this.db.candidates.filter((c:CandidateDTO)=> c.examId === examId));
        })
    }
    changeCandidateStatus(id: string, status: CandidateStatus): Promise<CandidateDTO> {
        return new Promise(res => {
            let index = this.db.candidates.findIndex((c:CandidateDTO) => c.id === id);
            this.db.candidates[index] = {
                ...this.db.candidates[index],
                status
            }
            res(this.db.candidates[index]);
        })
    }

} 
