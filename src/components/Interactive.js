import React from "react";
import Graph from "./Chart";

function Interactive({ dataTitle, dataSubtitle, children, isOpen }) {
  return (
    <div
      className={` data__content  ${
        isOpen ? "data__content_is-open" : "data__content_transform"
      }`}
    >
      <h2 className="data__title">{dataTitle}</h2>
      <p className="data__subtitle">{dataSubtitle}</p>
      <div className="interactive__grid">
        <div className="interactive__graph">
          <Graph />
        </div>
        <p className=" interactive__text-container tetes">{children}</p>
      </div>
    </div>
  );
}

export default Interactive;
