import React, { useState } from "react";
import FreelancerMap from "./scraper-sites/freelancermap/freelancermap-component";

const Scraper = () => {
  const [freelancermap, setFreelancermap] = useState(false);
  const [freelancede, setFreelancede] = useState(false);

  return (
    <div className="haha">
      {freelancermap && <FreelancerMap />}
      {freelancede && <div>freelancede</div>}
      {freelancermap || freelancede || (
        <>
          <h1>Which site do you want to scrap?</h1>
          <button onClick={() => setFreelancermap(true)}>freelancermap</button>
          <button onClick={() => setFreelancede(true)}>freelanceDe</button>
        </>
      )}
    </div>
  );
};

export default Scraper;
