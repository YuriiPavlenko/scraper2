import React, { useState } from "react";
import logoMap from "./scraper-sites/freelancermap/freelancermap_logo.svg";
import logoDe from "./scraper-sites/freelancede/freelancede_logo.svg";
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
          <h1>
            Which <span style={{ color: "blueviolet" }}>site</span> do you want
            to scrape?
          </h1>
          <img
            className="btnImg"
            alt="freelancermap logo"
            onClick={() => setFreelancermap(true)}
            src={logoMap}
          />
          <img
            className="btnImg"
            alt="freelancede logo"
            onClick={() => setFreelancede(true)}
            src={logoDe}
          />
        </>
      )}
    </div>
  );
};

export default Scraper;
