import { defineConfig, devices } from "@playwright/test";
import path from "node:path";

const port = process.env.PLAYWRIGHT_PORT ?? "3000";
const baseURL = process.env.PLAYWRIGHT_BASE_URL ?? `http://127.0.0.1:${port}`;
const repoRoot = path.resolve(process.cwd(), "../..");

export default defineConfig({
  testDir: "./tests/e2e",
  timeout: 30_000,
  fullyParallel: true,
  reporter: [["list"]],
  use: {
    baseURL,
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
  webServer: {
    command: `pnpm --filter @kv/web dev --port ${port}`,
    cwd: repoRoot,
    env: {
      AUTH_URL: baseURL,
      NEXT_PUBLIC_APP_URL: baseURL,
    },
    url: baseURL,
    reuseExistingServer: true,
    timeout: 120_000,
  },
});
