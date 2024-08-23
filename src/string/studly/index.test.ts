import { it, expect } from "vitest";
import { studly } from ".";

it("can convert string to StudlyCase", () => {
	expect(studly("hello_world")).toBe("HelloWorld");
	expect(studly("hello-world")).toBe("HelloWorld");
});
