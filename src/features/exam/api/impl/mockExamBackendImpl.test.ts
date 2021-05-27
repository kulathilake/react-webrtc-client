import ExamBackendMockImpl from './examBackendMockImpl';
import data from './mock-data.json';

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
    })
})
