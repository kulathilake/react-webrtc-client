import {Backend } from './backend';

export type APIs = {
    dev: Backend|null,
    test:Backend|null,
    prod:Backend|null
}


export const apis: APIs = {
    dev: null,
    test: null,
    prod: null,
};

const withStageController = (a: APIs): Backend|null=> {
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