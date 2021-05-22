import MockBackend from ".";
import { User } from "../../../common/interfaces/user.interface";
import { LoginError } from '../../../common/errors';
import { AuthProvider } from "../../../common/interfaces/provider.types";

let mockbackend: MockBackend;

describe('Mock Backend Tests', function() {

    beforeAll(function() {
        mockbackend = new MockBackend();
    })

    test('Constructor', function(){
        expect(mockbackend instanceof MockBackend).toBeTruthy();
        /*...Member variable assertions follows
        ... */
    });

    test('Login With Valid Email and Password', function(){
        const email = 'dev@rupasutra.com';
        const pw = 'RupasutraDev!';

        return expect(mockbackend.login(email,pw))
        .resolves.toHaveProperty('tokens');
        

    });

    test('Login with invalid Email and Passowrd', function() {
        const email = 'invalid@rupasutra.com';
        const pw = 'RupasutraDee';
        return expect(mockbackend.login(email,pw))
        .rejects.toThrow('Invalid Credentials');
        
    })

    test('Successful Federated Login', function() {
        return expect(mockbackend.federatedLogin(AuthProvider.FACEBOOK))
        .resolves.toHaveProperty('tokens');
    })

    

})
export{};
