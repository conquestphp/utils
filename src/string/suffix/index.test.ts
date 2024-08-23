import { it, expect } from "vitest";
import { suffix } from ".";

it("can append suffix", () => {
	expect(suffix("Hello", " World")).toBe("Hello World");
});
