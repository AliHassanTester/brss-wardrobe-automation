import type { PlaywrightTestConfig } from "@playwright/test";
import { devices } from "@playwright/test";
import dotenv from "dotenv";
import os from "node:os";

// Read environment variables
const env = process.env.NODE_ENV || "dev";
dotenv.config({ path: `./src/config/.env.${env}` });

const { URL, skipGlobalLogin } = process.env;
const skip_login = skipGlobalLogin === "true";

// Xray Reporter Options
const xrayOptions = {
  embedAnnotationsAsProperties: true,
  embedAttachmentsAsProperty: "testrun_evidence",
  outputFile: "./xray-report.xml",
};

const config: PlaywrightTestConfig = {
  testDir: "./src/specs/",

  timeout: 90 * 1000,

  expect: {
    timeout: 60 * 1000,
  },

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 1 : 0,

  workers: process.env.CI ? 1 : 1,

  reporter: [
    ["list", { printSteps: true }],

    // ["@xray-app/playwright-junit-reporter", xrayOptions],

    [
      "allure-playwright",
      {
        detail: true,
        outputFolder: "allure-results",
        suiteTitle: true,
        environmentInfo: {
          OS: os.platform(),
          Architecture: os.arch(),
          NodeVersion: process.version,
          url: URL,
        },
        categories: [
          {
            name: "Missing file errors",
            messageRegex: /^ENOENT: no such file or directory/,
          },
        ],
      },
    ],

    ["html", { open: "never" }],
  ],

  use: {
    baseURL: URL,

    headless: process.env.CI ? true : false,

    video: "on",

    trace: "on",

    actionTimeout: 45 * 1000,

    viewport: {
      width: 1300,
      height: 700,
    },

    launchOptions: {
      args: [
        "--window-size=1300,700",
        "--disable-resizable",
      ],
    },
  },

  projects: [
    {
      name: "Setup",
      testMatch: "**/*.setup.spec.ts",
    },

    {
      name: "Chromium",

      testIgnore: ["**/*.setup.spec.ts"],

      dependencies: skip_login ? [] : ["Setup"],

      use: {
        userAgent: devices["Desktop Chrome"].userAgent,

        viewport: {
          width: 1300,
          height: 700,
        },

        launchOptions: {
          args: [
            "--window-size=1300,700",
            "--disable-resizable",
          ],
        },
      },
    },
  ],
};

export default config;