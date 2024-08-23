import { it, expect } from "vitest";
import { headline } from ".";

it("can convert string to headline case", () => {
	expect(headline("steve_jobs")).toBe("Steve Jobs");
	expect(headline("EmailNotificationSent")).toBe("Email Notification Sent");
});
