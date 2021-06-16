import CandidateBackendMock from "./candidateBackendMockImpl";
import data from '../../../../../app/common/data/mock-data.json';
import { CandidateEnrollmentDTO } from "../../../../../app/common/types/candidate.types";

const backend = new CandidateBackendMock();
describe('Candidate Backend Mock Implementation Tests', function() {

    test('Enroll Candidate in an exam', () => {
        let nc: CandidateEnrollmentDTO = {
            email: 'newcandidate@email.com',
            examId: data.exams[0].id,
            stringToSign: 'plain text',
            signature: 'cipher text'
        }
        return backend.enroll(nc)
        .then(res => {
            return expect(data.candidates.some(c => (c.email === nc.email && c.examId === nc.examId)));
        })
    });

    test('Get Candidae with Id and Valid Signature', () => {
        let id = data.candidates[0].id;
        let signature = data.candidates[0].signature;
        return backend.getCandidate(id, signature)
        .then(res=>{
            expect(res.id).toBe(id);
        })
    });

    test('Get Candidae with Id and Invalid Signature', () => {
        let id = data.candidates[0].id;
        let signature = "Invalid Signature";
        return expect(backend.getCandidate(id, signature))
        .rejects.toThrow("Item Not Found");
    });

    test('Unenroll Candidate from an exam', () => {
        let id  = data.candidates[0].id;
        let signature = data.candidates[0].signature;
        return backend.unenroll(id, signature)
        .then(res => {
            expect(data.candidates.findIndex(c=>c.id===id)).toBe(-1);
        })
    });


})