const { test, expect } = require("@playwright/test");

test("Incident Atlas logs, resolves, persists and exports an incident", async ({ page }) => {
  await page.goto("/projects/IncidentAtlas/");
  await expect(page.getByRole("heading", { name: /Make the response visible/ })).toBeVisible();

  const title = "E2E synthetic API latency incident";
  await page.locator('#incident-form input[name="title"]').fill(title);
  await page.locator('#incident-form select[name="service"]').selectOption("Public API");
  await page.locator('#incident-form select[name="severity"]').selectOption("P1");
  await page.locator('#incident-form textarea[name="impact"]').fill("Synthetic test case; no real service affected.");
  await page.locator('#incident-form textarea[name="response"]').fill("Validate the response workflow.");
  await page.locator("#save-incident").click();

  let card = page.locator(".incident-card").filter({ hasText: title });
  await expect(card).toBeVisible();
  await expect(card.locator(".badge.p1")).toHaveText("P1");
  await card.getByRole("button", { name: "Mark resolved" }).click();
  await expect(card.locator(".badge.resolved")).toHaveText("resolved");

  await page.reload();
  card = page.locator(".incident-card").filter({ hasText: title });
  await expect(card.locator(".badge.resolved")).toHaveText("resolved");

  const downloadPromise = page.waitForEvent("download");
  await page.locator("#export-json").click();
  const download = await downloadPromise;
  expect(download.suggestedFilename()).toBe("incident-atlas-export.json");
});
