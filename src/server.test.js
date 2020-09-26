import sinon from "sinon";
import request from "supertest";
import { expect } from "chai";
import db from "./db";
import DummyData from "./DummyData/DummyData";
import { app } from "./server";

describe("GET /users/:name", () => {
  it("Sends The Correct Response When User With This Username is Exists", async () => {
    const fakeData = DummyData[0];
    const stub = sinon.stub(db, "getUserByName").resolves(fakeData);
    await request(app)
      .get("/users/abc")
      .expect("Content-Type", /json/)
      .expect(200)
      .expect((res) => {
        expect(fakeData).excludingEvery("_id").to.deep.equal(res.body);
      });
    expect(stub.getCall(0).args[0]).to.equal("abc");
    stub.restore();
  });

  it("Sends The Correct Response When There is an Error", async () => {
    const fakeError = { message: "Something Went Wrong" };
    const stub = sinon.stub(db, "getUserByName").throws(fakeError);

    await request(app).get("/users/abc").expect(500).expect("Content-Type", /json/).expect(fakeError);
    stub.restore();
  });

  it("Returns the Appropriate Response When The User it Not Found", async () => {
    const stub = sinon.stub(db, "getUserByName").resolves(null);

    await request(app).get("/users/def").expect(404);
    stub.restore();
  });
});
