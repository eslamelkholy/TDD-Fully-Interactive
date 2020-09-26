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
    await request(app).get("/users/abc").expect(200).expect("Content-Type", /json/).expect(fakeData);

    expect(stub.getCall(0).args[0]).to.equal("abc");

    stub.restore();
  });
});
