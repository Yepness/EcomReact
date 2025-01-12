import React, { useEffect, useState } from "react";
import "./sponsor-bar.css";

const SponsorsBar = () => {
  const sponsors = [
    { src: "../src/logos/logo1.png", height: "70px" },
    { src: "../src/logos/logo2.png", height: "60px" },
    { src: "../src/logos/logo3.png", height: "50px" },
    { src: "../src/logos/logo4.png", height: "30px" },
  ];

  const [duplicatedSponsors, setDuplicatedSponsors] = useState([]);

  useEffect(() => {
    const containerWidth = document.querySelector(".sponsors-container").offsetWidth;
    const logoWidth = 50 + 32;
    const logosNeeded = Math.ceil(containerWidth / logoWidth);
    const newSponsors = [];

    for (let i = 0; i < logosNeeded; i++) {
      newSponsors.push(...sponsors);
    }

    setDuplicatedSponsors(newSponsors);
  }, [sponsors]);

  return (
    <div className="sponsors-container">
      <div className="sponsors-track">
        {duplicatedSponsors.map((logo, index) => (
          <img key={index} src={logo.src} alt={`sponsor-${index}`} className="sponsor-logo" style={{ height: logo.height }} />
        ))}
      </div>
    </div>
  );
};

export default SponsorsBar;
