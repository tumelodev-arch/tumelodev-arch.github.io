const { test, expect } = require("@playwright/test");

test("Decision Archive saves a record and exports portable Markdown and JSON", async ({ page }) => {
  await page.goto("/projects/DecisionArchive/");
  await expect(page.getByRole("heading", { name: /Keep the why, not just the what/ })).toBeVisible();

  const title = "E2E decision about explicit errors";
  await page.locator('#decision-form input[name="title"]').fill(title);
  await page.locator('#decision-form select[name="area"]').selectOption("API design");
  await page.locator('#decision-form select[name="status"]').selectOption("accepted");
  await page.locator('#decision-form textarea[name="context"]').fill("Callers need a consistent way to understand rejected input.");
  await page.locator('#decision-form textarea[name="decision"]').fill("Return a stable error code and a plain-language message.");
  await page.locator('#decision-form textarea[name="alternatives"]').fill("Return a boolean only.");
  await page.locator('#decision-form textarea[name="consequences"]').fill("The error contract must be versioned deliberately.");
  await page.locator('#decision-form input[name="tags"]').fill("api, validation, e2e");
  await page.locator("#save-decision").click();

  let card = page.locator(".decision-card").filter({ hasText: title });
  await expect(card).toBeVisible();
  await expect(card.locator(".status-badge.accepted")).toHaveText("accepted");
  await page.reload();
  card = page.locator(".decision-card").filter({ hasText: title });
  await expect(card).toBeVisible();

  const markdownPromise = page.waitForEvent("download");
  await page.locator("#export-markdown").click();
  const markdown = await markdownPromise;
  expect(markdown.suggestedFilename()).toBe("decision-archive.md");

  const jsonPromise = page.waitForEvent("download");
  await page.locator("#export-json").click();
  const backup = await jsonPromise;
  expect(backup.suggestedFilename()).toBe("decision-archive-backup.json");
});
