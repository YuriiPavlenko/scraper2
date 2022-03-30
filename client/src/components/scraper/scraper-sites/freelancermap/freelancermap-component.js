import React, { useState, useEffect } from "react";
import scrape from "./handler";

const FreelancerMap = () => {
  const [finished, setFinished] = useState(false);
  const [started, setStarted] = useState(false);
  const [query, setQuery] = useState("");

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
      {started ? (
        finished ? (
          <p>scraping finished successfuly</p>
        ) : (
          <p>scraping in progress</p>
        )
      ) : (
        <>
          <input
            id="query"
            type="text"
            onChange={(event) => setQuery(event.target.value)}
          ></input>
          <button onClick={() => setStarted(true)}>Click to start</button>
        </>
      )}
    </div>
  );
};

export default FreelancerMap;
