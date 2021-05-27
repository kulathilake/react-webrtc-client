import ExamBackendMockImpl from './examBackendMockImpl';

describe('Examination Backend Mock Implementation Tests', function() {
    it('Instantiates Examination Backend',() => {
        let backend = new ExamBackendMockImpl();
        console.log(backend)
    })
})