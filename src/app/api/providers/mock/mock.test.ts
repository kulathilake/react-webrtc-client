import MockBackend from ".";
import { User } from "../../../common/interfaces/user.interface";
import { LoginError } from '../../../common/errors';

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

    test('Login With Valid Email and Password', function(done){
        const email = 'dev@rupasutra.com';
        const pw = 'RupasutraDev!';

        mockbackend.login(email,pw)
        .then((res: User):void =>{
            if(res){
                expect(res.email).toEqual('dev@rupasutra.com');
            }
            done();
        })
        .catch(done);

    });

    test('Login With Invalid Email and Password', function(done){
        const email = 'invalid@rupasutra.com';
        const pw = 'RupasutraDev!';

        expect(()=>{
            mockbackend.login(email,pw)
            .catch(e=>{
                console.log(e.message);
                throw e;
            })
        }).toThrowError(LoginError)

    });



})
export{};
