interface Backend {

};

export const apis = {
    dev: '' as Backend,
    test: '' as Backend,
    prod: '' as Backend,
};

const withStageController: Backend = (a: typeof apis) => {
    if (process.env.NODE_ENV === 'development') {
        return a.dev;
    } else if (process.env.NODE_ENV === 'test') {
        return a.test; 
    } else {
        return a.prod;
    }
} 

export default withStageController(apis);