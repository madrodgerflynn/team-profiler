const Intern = require("../lib/Intern");

describe("", () => {
  describe("#constructor", () => {
    it("should construct", () => {
      const e1 = new Employee("tommy lee", 69, "CU Boulder");
      expect(e1).toEqual({
        name: "tommy lee",
        id: 69,
        school: "CU Boulder",
      });
    });
  });
});
