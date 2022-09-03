import React, { Component } from "react";
import { XYPlot, LineSeries, HorizontalGridLines, YAxis } from "react-vis";

function Interactive({ dataTitle, dataSubtitle, dataImage, children, isOpen }) {
  const data = [
    { x: 0, y: 8 },
    { x: 1, y: 5 },
    { x: 2, y: 4 },
    { x: 3, y: 9 },
    { x: 4, y: 1 },
    { x: 5, y: 7 },
    { x: 6, y: 6 },
    { x: 7, y: 3 },
    { x: 8, y: 2 },
    { x: 9, y: 0 },
  ];

  return (
    <div
      className={` data__content  ${
        isOpen ? "data__content_is-open" : "data__content_transform"
      }`}
    >
      <h2 className="data__title">{dataTitle}</h2>
      <p className="data__subtitle">{dataSubtitle}</p>
      <div className="data__grid">
        <div className="data__graph ">
          <XYPlot height={300} width={300}>
            <LineSeries data={data} />
            <HorizontalGridLines />
            <YAxis />
          </XYPlot>
        </div>
        <p className="data__text-container">{children}</p>
        <p className="data__legend"></p>
        <p className="data__label"></p>
      </div>
    </div>
  );
}

export default Interactive;
