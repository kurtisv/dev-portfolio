import { expect, test } from "@playwright/test";

test("portfolio, docs, and public API routes render", async ({ page, request }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: /web products that are useful/i })).toBeVisible();

  await page.goto("/projects");
  await expect(page.getByRole("heading", { name: /different product surfaces/i })).toBeVisible();

  await page.goto("/docs");
  await expect(page.getByRole("heading", { name: /how this portfolio is built/i })).toBeVisible();

  await page.goto("/docs/api");
  await expect(page.getByText(/dev portfolio api/i).first()).toBeVisible();

  const openapi = await request.get("/api/openapi");
  expect(openapi.ok()).toBe(true);

  const demo = await request.get("/api/v1/demo");
  expect(demo.ok()).toBe(true);
});

test("dashboard routes require login", async ({ page }) => {
  await page.goto("/dashboard/api-usage");
  await expect(page).toHaveURL(/\/login/);
});
