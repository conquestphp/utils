import { it, expect } from "vitest";
import { ucfirst } from ".";

it("can convert first character to uppercase", () => {
	expect(ucfirst("foo bar")).toBe("Foo bar");
	expect(ucfirst("FOO BAR")).toBe("FOO BAR");
});
