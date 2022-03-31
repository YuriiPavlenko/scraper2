/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import scrape from "./handler";

const FreelancerMap = () => {
  const [finished, setFinished] = useState(false);
  const [started, setStarted] = useState(false);
  const [successfuly, setSuccessfuly] = useState(false);

  const [query, setQuery] = useState("");
  const [deutschland, setDeutschland] = useState(true);
  const [oesterreich, setOesterreich] = useState(true);
  const [schweiz, setSchweiz] = useState(true);

  useEffect(() => {
    (async () => {
      if (started) {
        try {
          const result = await scrape(query);
          setFinished(result);
        } catch (error) {
          console.log(error);
        }
      }
    })();
  }, [started]);

  return (
    <div>
      {started || (
        <div style={{ display: "flex", margin: "20px 0 0 0" }}>
          <div style={{ display: "grid" }}>
            <div>
              <label for="de">Deutschland</label>
              <input
                onChange={() => setDeutschland(!deutschland)}
                id="de"
                type="checkbox"
                checked="true"
                style={{ margin: "0px 20px 0 5px" }}
              />
              <label for="oe">Österreich</label>
              <input
                onChange={() => setOesterreich(!oesterreich)}
                id="oe"
                type="checkbox"
                checked="true"
                style={{ margin: "0 20px 0 5px" }}
              />
              <label for="sch">Schweiz</label>
              <input
                onChange={() => setSchweiz(!schweiz)}
                id="sch"
                checked="true"
                type="checkbox"
                style={{ margin: "0 20px 0 5px" }}
              />
            </div>
            <input
              placeholder="SAP"
              id="query"
              type="text"
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
          <button
            class="btn btn-4 btn-sep icon-start"
            onClick={() => setStarted(true)}
          >
            Start
          </button>
        </div>
      )}
      {finished && !successfuly && (
        <>
          <p>
            Scraping finished successfuly.{" "}
            <span style={{ color: "blueviolet" }}>Import</span> them now or{" "}
            <span style={{ color: "blueviolet" }}>save</span> for later?
          </p>
          <div>
            <button class="btn btn-4 btn-sep icon-scrape" onClick={() => {}}>
              Download
            </button>
            <button class="btn btn-4 btn-sep icon-import" onClick={() => {}}>
              Import
            </button>
          </div>
        </>
      )}
      {started && !finished && <p>Scraping in progress</p>}
      {finished && successfuly && <p>Scraping failed 😔</p>}
    </div>
  );
};

export default FreelancerMap;
