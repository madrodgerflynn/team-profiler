const Manager = require("../lib/Manager");

describe("", () => {
  describe("#constructor", () => {
    it("should construct", () => {
      const e1 = new Manager(
        "bill gates",
        1,
        "notbillgates@macrosoft.com",
        "221B"
      );
      expect(e1).toEqual({
        name: "bill gates",
        id: 1,
        officeNumber: "221B",
      });
    });
  });
});
