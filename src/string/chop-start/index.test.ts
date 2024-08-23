import { it, expect } from "vitest";
import { chopStart } from ".";

it("can chop string from start", () => {
	expect(chopStart("https://laravel.com", "https://")).toBe("laravel.com");
	expect(chopStart("https://laravel.com", ["https://", "http://"])).toBe(
		"laravel.com",
	);
	expect(chopStart("https://laravel.com", [".com"])).toBe(
		"https://laravel.com",
	);
});
