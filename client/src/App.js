import scraper from "./scraper.svg";
import "./App.css";
import React, { useState } from "react";
import Scraper from "./components/scraper/scraper-component";
import Importer from "./components/importer/importer-component";

function App() {
  const [scraping, setScraping] = useState(false);
  const [importing, setImporting] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <div className="hehe">
          <img src={scraper} className="App-logo" alt="logo" />
          <span id="background"></span>
        </div>
        {scraping || importing || (
          <>
            <h1>
              To <span style={{ color: "blueviolet" }}>scrape</span>, or to{" "}
              <span style={{ color: "blueviolet" }}>import</span>, that is the
              question 💀:
            </h1>
            <div>
              <button
                class="btn btn-4 btn-sep icon-scrape"
                onClick={() => setScraping(true)}
              >
                Scrape
              </button>
              <button
                class="btn btn-4 btn-sep icon-import"
                onClick={() => setImporting(true)}
              >
                Import
              </button>
            </div>
          </>
        )}
        {scraping && <Scraper />}
        {importing && <Importer />}
      </header>
    </div>
  );
}

export default App;
