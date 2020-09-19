import { expect } from "chai";
import { isAnagram } from "./anagrams";

describe("isAnagram - Basic Functionality Test Cases", () => {
  it("Must Returns False If Two String Not Equal Each Other", () => {
    const { str1, str2 } = { str1: "test1", str2: "test2" };
    const expected = false;
    const actual = isAnagram(str1, str2);
    expect(actual).to.equal(expected);
  });

  it("Must Returns True If Two String Equal Each Other", () => {
    const { str1, str2 } = { str1: "listen", str2: "silent" };
    const expected = true;
    const actual = isAnagram(str1, str2);
    expect(actual).to.equal(expected);
  });

  it("Two Strings Must Be The Same As Each Other No Edge Cases", () => {
    const { str1, str2 } = { str1: "elbows", str2: "below" };
    const expected = false;
    const actual = isAnagram(str1, str2);
    expect(actual).to.equal(expected);
  });

  it("Must handle Two Strings Different Quantity And Also Same Chars", () => {
    const { str1, str2 } = { str1: "listens", str2: "silent" };
    const expected = false;
    const actual = isAnagram(str1, str2);
    expect(actual).to.equal(expected);
  });

  it("Must Ignore Spaces Where Comparing The Two Strings", () => {
    const { str1, str2 } = { str1: "conversation", str2: "voices rant on" };
    const expected = true;
    const actual = isAnagram(str1, str2);
    expect(actual).to.equal(expected);
  });

  it("Must Ignore Upper / Lower Cases Where Comparing The Two Strings", () => {
    const { str1, str2 } = { str1: "STATE", str2: "taste" };
    const expected = true;
    const actual = isAnagram(str1, str2);
    expect(actual).to.equal(expected);
  });
});
