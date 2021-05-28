import { IExamBackend } from "./exam-backend.interface";
import ExamBackendFirebase from "./impl/firebase/examBackendFirebaseImpl";
import ExamBackendMock from "./impl/mock/examBackendMockImpl";

const apis = {
    dev:  new ExamBackendMock(),      // An stubbed backend.
    test: new ExamBackendFirebase(), // Both Production and Test modes will use the same
    prod: new ExamBackendFirebase(), // class, but take configurations from different. envs.
};

const withStageController = (a: typeof apis): IExamBackend | null=> {
        if (process.env.REACT_APP_STAGE === 'development') {
            return a.dev;
        } else if (process.env.REACT_APP_STAGE === 'test') {
            return null 
        } else {
            return null;
        }
} 

export default withStageController(apis);