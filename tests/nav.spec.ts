import { test, expect } from "@playwright/test";

test.describe("Silicon Epoch Site Navigation Smoke Tests", () => {
  const host = "http://localhost:8080";

  test("should load home page and verify display elements", async ({ page }) => {
    await page.goto(host);
    await expect(page).toHaveTitle(/Silicon Epoch/);

    // Check main branding header is visible
    const brandHeader = page.locator("header");
    await expect(brandHeader).toBeVisible();
    await expect(brandHeader).toContainText("Silicon");
  });

  test("should check navigation menu list items", async ({ page }) => {
    await page.goto(host);

    // Check that we can navigate to timeline
    await page.goto(`${host}/timeline`);
    await expect(page.locator("h1")).toBeVisible();
    await expect(page.locator("h1")).toContainText(/Superintelligence/i);

    // Check that we can navigate to sources bibliography
    await page.goto(`${host}/sources`);
    await expect(page.locator("h1")).toBeVisible();
    await expect(page.locator("h1")).toContainText(/research/i);
  });

  test("should load a specific chapter page and check layout", async ({ page }) => {
    await page.goto(`${host}/compute`);
    await expect(page.locator("h1")).toBeVisible();
    await expect(page.locator("h1")).toContainText(/Compute/i);

    // Check that citation markers exist in page text
    const citations = page.locator("a[href*='#source-']");
    const count = await citations.count();
    expect(count).toBeGreaterThanOrEqual(0);
    expect(page.url()).toContain("/compute");
  });
});
