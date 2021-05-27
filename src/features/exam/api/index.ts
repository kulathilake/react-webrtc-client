import { Backend } from "../../../app/api/backend.interface";
import MockExamBackendImpl from "./impl/mockExamBackendImpl";

const apis = {
    dev: new MockExamBackendImpl(),      // An stubbed backend.
    test: {} as Backend, // Both Production and Test modes will use the same
    prod: {} as Backend, // class, but take configurations from different. envs.
};

const withStageController = (a: typeof apis): Backend => {
        if (process.env.REACT_APP_STAGE === 'development') {
            return a.dev;
        } else if (process.env.REACT_APP_STAGE === 'test') {
            return a.test; 
        } else {
            return a.prod;
        }
} 

export default withStageController(apis);