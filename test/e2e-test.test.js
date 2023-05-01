const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const app = require('../app').app;

describe('suite de prueba e2e pra el curso', () =>{
    it('should return hello world', (done) => {
        chai.request(app)
            .get('/')
            .end((err,res) => {
                chai.assert.equal(res.text, 'Hello World!')
                done();
            });
    });
});