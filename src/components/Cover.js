import React from "react";

function Cover() {
  return (
    <div className="cover__content">
      <div className="cover__text-content">
        <h2 className="cover__title">Select your data</h2>
        <p className="cover__subtitle">
          Click on one of the buttons to view the different data
        </p>
      </div>
      <ul className="cover__label">
        <li className="cover__label_item">Ready to go?</li>
        <li className="cover__label_item">Heat Map</li>
        <li className="cover__label_item">CO2 by flight</li>
        <li className="cover__label_item">Top 10 European Airports</li>
      </ul>
    </div>
  );
}

export default Cover;
