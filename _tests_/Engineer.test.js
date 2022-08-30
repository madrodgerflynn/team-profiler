const Engineer = require("../lib/Engineer");

describe("", () => {
  describe("#constructor", () => {
    it("should construct", () => {
      const e1 = new Engineer("roxy", 2, "roxy@macrosoft.com", "@roxy");
      expect(e1).toEqual({
        name: "roxy",
        id: 2,
        gitHub: "@roxy",
      });
    });
  });
});
