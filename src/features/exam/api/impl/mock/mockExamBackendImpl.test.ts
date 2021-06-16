import { CandidateStatus } from '../../../../../app/common/types/candidate.types';
import { ExamDTO, QuestionDTO } from '../../../../../app/common/types/exam.types';
import ExamBackendMockImpl from './examBackendMockImpl';
import data from '../../../../../app/common/data/mock-data.json';

let backend = new ExamBackendMockImpl();

describe('Examination Backend Mock Implementation Tests', function() {
    
    test('Gets the first page of the Exams List',(done) => {
        let length = data.exams.length;
        backend.getExams()
        .then(res => {
            expect(res).toHaveLength(length);
            done();
        });
    });

    test('Gets an Exam List Item by Id', (done) => {
        let id = data.exams[0].id;
        backend.getExam(id)
        .then(res => {
            expect(res.id).toEqual(id);
            done();
        })

    });

    test('Get an Exam with an invalid ID', () => {
        let id = 'invalid-id'
        return expect(backend.getExam(id))
        .rejects.toThrow('Item Not Found');

    });

    test('Get All the Questions of an Examination', ()=>{
        let exam = data.exams[0];
        let length = data.questions.filter(q=>q.examId=== exam.id ).length;
        return backend.getExamQuestions(exam.id)
        .then(res=>{
            return expect(res).toHaveLength(length);    
        })
        
    });

    test('Get a Question by a valid Id', ()=>{
        let id = data.questions[1].id;
        return backend.getQuestion(String(id))
        .then(res=>{
            return expect(res.id).toEqual(id);
        })
    });

    test('Create an Examination in the Database', ()=>{
        let newExam: ExamDTO = {
            schedule: {
                start: '12-12-20211000',
                end: '12-12-2021T1200',
                duration: 7200
            },
            title: 'This is a New Examination',
        };

        return backend.createNewExam(newExam)
        .then(res => {
            let createdExam = data.exams[data.exams.length-1];
            return expect(res).toEqual(createdExam);
        })
    });

    test('Create a new Question in the Database', ()=>{
        let newQuestion: QuestionDTO = {
            examId: "xam-x-001",
            title: 'This is a New Question',
            mark: 10,
            text: "Encrypted Question Text",
            parentId: null,
        };

        return backend.createNewQuestion(newQuestion)
        .then(res => {
            let createdQuestion = data.questions[data.questions.length-1];
            return expect(res).toEqual(createdQuestion);
        })
    });

    test('Update an existing Examination in the Database', () => {
        let exam: ExamDTO = {...data.exams[0]};
        exam.status = "done";
        exam.title = 'Updated Title';
        
        return backend.updateExam(exam)
        .then(res=>{
            return expect(res.status).toEqual('done');

        })
    
    });

    test('Update an existing Question in the Database', () => {
        let question: QuestionDTO = {...data.questions[0]};
        question.title = "Updated Title"
        
        return backend.updateQuestion(question)
        .then(res=>{
            return expect(res.title).toEqual('Updated Title');

        })
    
    });

    test('Get all Candidates of an Examination', () => {
        let examId = data.exams[0].id;
        let length = data.candidates.filter(c=>c.examId===examId).length;
        return backend.getExamCandidates(examId)
        .then(res => {
            return expect(res).toHaveLength(length);
        })
    });

    test('Update the Candidate Status', () => {
        let id = data.candidates[0].id;
        let status: CandidateStatus = CandidateStatus.APPROVED;
        return backend.changeCandidateStatus(id,status)
        .then(res => {
            return expect(res.status === status);
        })
    })
    test('Deletes an Exam from the Database', () => {
        let id = data.exams[0].id;
        return backend.deleteExam(id)
        .then(res => {
            return expect(data.exams[0].id).not.toEqual(id);
        });
    });

    test('Deletes a Question from the Database', () => {
        let id = data.questions[0].id;
        return backend.deleteExamQuestion(id)
        .then(res => {
            return expect(data.questions[0].id).not.toEqual(id);

        });
    })

})
