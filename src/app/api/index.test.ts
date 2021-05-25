describe('API With Stage Controller Testing', function(){
    
    // https://stackoverflow.com/a/48042799
    const OLD_ENV = process.env;
    beforeEach(() => {
        jest.resetModules() // Most important - it clears the cache
        process.env = { ...OLD_ENV }; // Make a copy
    });

    afterAll(() => {
        process.env = OLD_ENV; // Restore old environment
    });
    
    test('NODE_ENV=development', function(){
        process.env.NODE_ENV = 'development';
        const api = require('./index');
        expect(api.default.constructor.name).toEqual('MockBackend');
    });

    test('NODE_ENV=test / prod', function(){
        process.env.NODE_ENV = 'test';
        const api = require('./index');
        expect(api.default.constructor.name).not.toEqual('MockBackend');
    });

});

export{}
