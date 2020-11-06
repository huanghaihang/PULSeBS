const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
chai.use(chaiHttp);
const app = require("../server/server.js");
const knex = require("../server/db");

describe("GET /service/allservice", () => {
  beforeEach(async () => {
    await knex("table").del();
  });
  it("should return 3 results with status 200", async () => {
    let res = await chai.request(app).get("/sample").send();

    expect(res.status).to.equal(200);
  });
  afterEach(async () => {
    await knex("table").del();
  });
});
