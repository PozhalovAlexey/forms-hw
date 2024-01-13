import puppeteer from "puppeteer";
import { fork } from "child_process";

describe("test popover", () => {
  let browser
  let page
  let server

  const baseUrl = "http://localhost:8080";

  beforeAll(async () => {
    server = fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on("error", reject);
      server.on("message", (message) => {
        if (message === "ok") {
          resolve();
        }
      });
    });

    browser = await puppeteer.launch(
      {
        headless: false,
        slowMo: 1000,
        args: ["--no-sandbox"],
      },
      1000
    );
    page = await browser.newPage();
  }, 35000);

  afterAll(async () => {
    await browser.close();
    server.kill();
    server = null;
    page = null;
    browser = null;
  });

  test("click on button", async () => {
    await page.goto(baseUrl);
    const btn = await page.$("#btn-2");
    await btn.click();
    await page.waitForSelector(".popover");
  }, 35000);

  test("two click on button", async () => {
    await page.goto(baseUrl);
    const btn = await page.$("#btn-1");
    await btn.click();
    await btn.click();
    await page.waitForSelector(".popover.hidden");
  }, 35000);
});
