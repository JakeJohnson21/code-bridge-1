import React from "react";

function Analysis({ dataTitle, dataImage, children, isOpen, name }) {
  return (
    <div
      className={`data__content js-${name}-modal ${
        isOpen ? "data__content_is-open" : ""
      }`}
    >
      <h2 className="data__title">{dataTitle}</h2>
      <div className="data__grid">
        <img src={dataImage} alt="data" className="data__graph" />
        <p className="data__text-container">{children}</p>
      </div>
    </div>
  );
}

export default Analysis;
