import { CandidateDTO, CandidateEnrollmentDTO, CandidateStatus } from '../../../../../app/common/types/candidate.types';
import ICandidateBackend from '../../candidate-backend.interface';
import data from '../../../../../app/common/data/mock-data.json';
import { ExamDTO } from '../../../../../app/common/types/exam.types';

export default class CandidateBackendMock implements ICandidateBackend {
    private db: any = data;

    getCandidate(id: string, signature: string): Promise<CandidateDTO> {
        return new Promise((res,rej)=>{
            let item = this.db.candidates.find((c:CandidateDTO)=>(c.id===id && c.signature===signature));
            if(!!item){
                res(item);
            } else {
                rej(new Error("Item Not Found"));
            }
        })
    }

    enroll(candidate: CandidateEnrollmentDTO): Promise<CandidateDTO> {
        return new Promise((res,rej)=>{
            let exam = this.db.exams.find((e: ExamDTO) => e.id === candidate.examId);
            if(!!!exam) rej(new Error('Item Not Found'));
            else {
                let id = exam?.id + '-ca-' + Math.floor(Math.random()*100);
                let newCandidate = {
                    ...candidate,
                    id: id,
                    status: CandidateStatus.PENDING.toString()
                }
                this.db.candidates.push(newCandidate);
                res({
                        ...newCandidate, 
                        status: CandidateStatus.PENDING
                    })
            }
        })
    }

    unenroll(id: string, signature: string): Promise<void> {
        let index = this.db.candidates.findIndex((c: CandidateDTO)=>(c.id === id && c.signature === signature));
        this.db.candidates.splice(index,1);
        return new Promise(res=>{
            res();
        })
    }

}