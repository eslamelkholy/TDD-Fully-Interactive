import { MongoClient } from "mongodb";
import { expect } from "chai";
import { getUserByName } from "./db";
import DummyData from "./DummyData/DummyData";

describe("Get User By Username", () => {
  it("Get The Correct User From Database Given a Username", async () => {
    const client = await MongoClient.connect("mongodb://localhost:27017/TEST_DB", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = client.db("TEST_DB");
    await db.collection("users").insertMany(DummyData);
    const actual = await getUserByName("eslam1");
    const finalDBState = await db.collection("users").find().toArray();
    await db.dropDatabase();
    client.close();

    const expected = {
      id: 1,
      name: "eslam1",
      email: "elkholy00@gmail.com",
    };
    expect(actual).excludingEvery("_id").to.deep.equal(expected);
    expect(finalDBState).excludingEvery("_id").to.deep.equal(DummyData);
  });
});
