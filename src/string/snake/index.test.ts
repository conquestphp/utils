import { it, expect } from "vitest";
import { snake } from ".";

it("can convert string to snake_case", () => {
	expect(snake("helloWorld")).toBe("hello_world");
	expect(snake("hello-world")).toBe("hello_world");
});
