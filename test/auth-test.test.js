const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const app = require('../app').app;


describe('suite de pruebas auth', () => {
    it('should return 401 when no jwt token available', (done) => {
        chai.request(app)
            .get('/team')
            .end((err, res) => {
                chai.assert.equal(res.statusCode, 401);
                done();
            });
    });
    it('should return 200 when jwt token is valid', (done) => {
        chai.request(app)
            .post('/login')
            .set('Authorization', 'JWT token')
            .end((err, res) => {
                chai.request(app)
                    .get('/team')
                    .set('Authorization', `$JWT {res.body.token}`)
                    .end((err, res) => {
                        chai.assert.equal(res.statusCode, 200);
                        done();
                    });
            });
        
    });
});