const { test, expect } = require("@playwright/test");

test("Randwise creates, edits, persists and exports a transaction", async ({ page }) => {
  await page.goto("/projects/Randwise/");
  await expect(page.getByRole("heading", { name: /Give every rand a clear place/ })).toBeVisible();
  await expect(page.locator("#transaction-rows tr").first()).toBeVisible();

  const description = page.locator('#transaction-form input[name="description"]');
  await description.fill("E2E grocery transaction");
  await page.locator('#transaction-form select[name="category"]').selectOption("Groceries");
  await page.locator('#transaction-form input[name="amount"]').fill("39.50");
  await page.locator("#save-transaction").click();

  let row = page.locator("#transaction-rows tr").filter({ hasText: "E2E grocery transaction" });
  await expect(row).toBeVisible();
  await expect(row).toContainText(/39[,.]50/);
  await row.getByRole("button", { name: "Edit" }).click();

  await description.fill("E2E updated grocery transaction");
  await page.locator("#save-transaction").click();
  row = page.locator("#transaction-rows tr").filter({ hasText: "E2E updated grocery transaction" });
  await expect(row).toBeVisible();
  await expect(page.locator("#form-message")).toHaveText("Transaction updated.");

  await page.reload();
  await expect(page.locator("#transaction-rows")).toContainText("E2E updated grocery transaction");

  const downloadPromise = page.waitForEvent("download");
  await page.locator("#export-csv").click();
  const download = await downloadPromise;
  expect(download.suggestedFilename()).toMatch(/^randwise-transactions-.*\.csv$/);
});
