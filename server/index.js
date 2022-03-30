const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
  res.set("Access-Control-Allow-Origin", "http://localhost:3000");
  res.json({ message: "Hello from server!" });
});

app.get("/api/upload", (req, res) => {
  res.set("Access-Control-Allow-Origin", "http://localhost:3000");
  res.json({ message: "Uploading get..." });
});

app.get("/api/scrape", (req, res) => {
  res.set("Access-Control-Allow-Origin", "http://localhost:3000");
  const puppeteer = require("puppeteer-extra");

  // add stealth plugin and use defaults (all evasion techniques)
  const StealthPlugin = require("puppeteer-extra-plugin-stealth");
  puppeteer.use(StealthPlugin());

  // puppeteer usage as normal
  puppeteer.launch({ headless: false }).then(async (browser) => {
    console.log("Running tests..");
    const page = await browser.newPage();
    await page.goto("https://www.freelancermap.de/login?ref=enterprise_modal");
    await page.waitForTimeout(5000);
    await page.screenshot({ path: "testresult.png", fullPage: false });
    await browser.close();
    console.log(`All done, check the screenshot. ✨`);
  });
  res.json({
    message: `Scraping for ${req.url.substring(
      req.url.indexOf("?") + 1,
      req.url.length
    )}`,
  });
});

app.post("/api/upload", (req, res) => {
  res.set("Access-Control-Allow-Origin", "http://localhost:3000");
  res.json({ message: "Uploading post..." });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
