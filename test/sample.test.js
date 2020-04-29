const sample = require("../src/sample");

test("success test", () => {
  expect(sample()).toBe("Hello World");
})