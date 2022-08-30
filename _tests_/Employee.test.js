const Employee = require("../lib/Employee");

describe("", () => {
  describe("#constructor", () => {
    it("should construct", () => {
      const e1 = new Employee("bill gates", 1, "notbillgates@macrosoft.com");
      expect(e1).toEqual({
        name: "bill gates",
        id: 1,
        email: "notbillgates@macrosoft.com",
      });
    });
  });
});
