const { add, greet } = require("../src/app");

test("addition should return correct result", () => {
    expect(add(10, 20)).toBe(30);
});

test("greeting should return correct message", () => {
    expect(greet("Nagarjuna")).toBe("Hello, Nagarjuna!");
});