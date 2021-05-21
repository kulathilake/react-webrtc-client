import {Backend } from './backend';

export const apis = {
    dev: null,
    test: null,
    prod: null,
};

const withStageController = (a: typeof apis): Backend|null=> {
    if (process.env.NODE_ENV === 'development') {
        return a.dev;
    } else if (process.env.NODE_ENV === 'test') {
        return a.test; 
    } else {
        return a.prod;
    }
} 

withStageController(apis)

export default withStageController(apis);