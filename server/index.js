import express from "express";
import scrape from "./scrape.js";

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
  const query = req.url.substring(req.url.indexOf("?") + 1, req.url.length);

  scrape(query).then();
  res.json({
    message: `Scraping for ${query} finished`,
  });
});

app.post("/api/upload", (req, res) => {
  res.set("Access-Control-Allow-Origin", "http://localhost:3000");
  res.json({ message: "Uploading post..." });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
