const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
chai.use(chaiHttp);
const app = require("../server/server.js");
const knex = require("../server/db");
var request=require('supertest'); 

//the data we need to pass to the login method
const userCredentials = {
  email: 's274930@studenti.polito.it', 
  password: 'password'
}
//now let's login the user before we run any tests
var authenticatedUser = request.agent(app);
before(function(done){
  authenticatedUser
    .post('/api/auth/login')
    .send(userCredentials)
    .end(function(err, response){
      expect(response.statusCode).to.equal(200);
      //expect('Location', '/');
      done();
    });
});

describe('GET /api/user', function(done){
  it('should return a 200 response if the user is logged in', function(done){
    authenticatedUser.get('/api/user')
    .expect(200, done);
  });
});
