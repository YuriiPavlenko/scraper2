import logo from "./logo.svg";
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
        <img src={logo} className="App-logo" alt="logo" />
        {scraping || importing || (
          <>
            <h1>Do you want to scrape data or import it to Vincere?</h1>
            <div>
              <button onClick={() => setScraping(true)}>Scrape</button>
              <button onClick={() => setImporting(true)}>Import</button>
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
