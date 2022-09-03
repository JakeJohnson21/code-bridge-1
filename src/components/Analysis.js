import React from "react";

function Analysis({
  dataTitle,
  dataSubtitle,
  dataImage,
  children,
  isOpen,
  name,
}) {
  return (
    <div
      className={`data__content js-${name}-modal ${
        isOpen ? "data__content_is-open" : ""
      }`}
    >
      <h2 className="data__title">{dataTitle}</h2>
      <p className="data__subtitle">{dataSubtitle}</p>
      <div className="data__grid">
        <img src={dataImage} alt="." className="data__graph" />
        <p className="data__text-container">{children}</p>
        <p className="data__legend"></p>
        <p className="data__label"></p>
      </div>
    </div>
  );
}

export default Analysis;
