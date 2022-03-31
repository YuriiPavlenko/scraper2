import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";

puppeteer.use(StealthPlugin());

const username = "alexander.mendelson@mendelson-co.com";
const pwd = "Schulung!";
const loginUrl = "https://www.freelancermap.de/login?ref=enterprise_modal";

const login = async (page) => {
  await page.goto(loginUrl);
  await page.waitForSelector("#onetrust-accept-btn-handler", { timeout: 2000 });
  await page.click("#onetrust-accept-btn-handler"); // accept cookies
  await page.type("#login", username);
  await page.type("#password", pwd);
  await page.click("button[type=submit]");
  await page.waitForNetworkIdle();
};

const configureSearch = async (page, query) => {
  await page.goto("https://www.freelancermap.de/freelancer-verzeichnis.html");
  await page.waitForSelector("input[name=newQuery]", { timeout: 2000 });
  await page.type("input[name=newQuery]", query);
  await page.click("button[type=submit]");
  await page.waitForNetworkIdle();
};

const scrape = async (query) => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await login(page);
  await configureSearch(page, query);
  await browser.close();
};

export default scrape;
