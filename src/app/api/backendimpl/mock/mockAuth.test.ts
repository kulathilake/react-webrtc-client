import MockBackend from "./index";
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
        return expect(mockbackend.auth.login(email,pw))
        .resolves.toHaveProperty('tokens')
        .then(()=>{
            expect(mockbackend.accessToken).not.toBeNull()
        })
        

    });

    test('Login with invalid Email and Passowrd', function() {
        const email = 'invalid@rupasutra.com';
        const pw = 'RupasutraDee';
        return expect(mockbackend.auth.login(email,pw))
        .rejects.toThrow('Invalid Credentials');
        
    });


    test('Successful Federated Login (eg: Facebook)', function() {
        return expect(mockbackend.auth.federatedLogin(AuthProvider.FACEBOOK))
        .resolves.toHaveProperty('tokens');
    });

    test('Successful Signup with Email and Password', function() {
        const email = 'new@rupasutra.com';
        const password = 'newPassword!';
        return expect(mockbackend.auth.signup(email,password))
        .resolves.toHaveProperty('tokens')
        .then(()=>{
            expect(mockbackend.accessToken).not.toBeNull();
        })
    });

    test('Successful Federated Signup (eg: Google)', function() {
        return expect(mockbackend.auth.federatedSignup(AuthProvider.GOOGLE))
        .resolves.toHaveProperty('tokens')
        .then(()=>{
            expect(mockbackend.accessToken).not.toBeNull();
        })
    });

})
export{};
