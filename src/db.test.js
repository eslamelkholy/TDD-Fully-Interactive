import { expect } from "chai";
import { getUserByName } from "./db";
import DummyData from "./DummyData/DummyData";
import { getDatabaseData, setDatabaseData, resetDatabase } from "./helpers/test-helpers";

describe("Get User By Username", () => {
  it("Get The Correct User From Database Given a Username", async () => {
    await setDatabaseData("users", DummyData);
    const actual = await getUserByName("eslam1");
    const finalDBState = await getDatabaseData("users");
    const expected = {
      id: 1,
      name: "eslam1",
      email: "elkholy00@gmail.com",
    };
    expect(actual).excludingEvery("_id").to.deep.equal(expected);
    expect(finalDBState).excludingEvery("_id").to.deep.equal(DummyData);

    afterEach("Reset The Database", async () => {
      await resetDatabase();
    });
  });

  it("Returns Null When the User is not Found", async () => {
    await setDatabaseData("users", DummyData);
    const actual = await getUserByName("def");
    expect(actual).to.be.null;
  });
});
