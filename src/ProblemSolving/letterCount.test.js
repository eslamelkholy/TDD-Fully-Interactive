import { expect } from "chai";
import { getLetterCount } from "./letterCount";

describe("getLetterCount - Basic Functionality", () => {
  it("Returns An Empty Object When Passed an Empty String", () => {
    const expected = {};
    const actual = getLetterCount("");
    expect(actual).to.deep.equal(expected);
  });

  it("Returns a Correct Letter Count For A Letter With Only One Of Each Letter", () => {
    const expected = { c: 1, a: 1, t: 1 };
    const actual = getLetterCount("cat");
    expect(actual).to.deep.equal(expected);
  });

  it("Returns The Corresct Letter Count For More Than One Of Certain Letter", () => {
    const testValue = "better";
    const expected = { b: 1, e: 2, t: 2, r: 1 };
    const actual = getLetterCount(testValue);
    expect(actual).to.deep.equal(expected);
  });
});
