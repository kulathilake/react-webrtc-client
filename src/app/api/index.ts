import {Backend} from './backend.interface';
import FirebaseBackend from './backendimpl/firebase';
import MockBackend from './backendimpl/mock';

const apis = {
    dev: new MockBackend(),      // An stubbed backend.
    test: new FirebaseBackend(), // Both Production and Test modes will use the same
    prod: new FirebaseBackend(), // class, but take configurations from different. envs.
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