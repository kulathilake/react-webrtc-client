import { ExamBackend } from "./exams-backend.interface";
import ExamBackendFirebaseImpl from "./impl/examBackendFirebaseImpl";
import ExamBackendMockImpl from "./impl/examBackendMockImpl";

const apis = {
    dev:  new ExamBackendMockImpl(),      // An stubbed backend.
    test: new ExamBackendFirebaseImpl(), // Both Production and Test modes will use the same
    prod: new ExamBackendFirebaseImpl(), // class, but take configurations from different. envs.
};

const withStageController = (a: typeof apis): ExamBackend => {
        if (process.env.REACT_APP_STAGE === 'development') {
            return a.dev;
        } else if (process.env.REACT_APP_STAGE === 'test') {
            return a.test; 
        } else {
            return a.prod;
        }
} 

export default withStageController(apis);