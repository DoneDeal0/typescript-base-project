import { foo } from "../scripts/app";

describe("foo", () => {
  it("return the name", () => {
    expect(foo("joe")).toEqual("joe");
  });
});
