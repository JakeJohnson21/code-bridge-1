import React from "react";

function Analysis({ dataTitle, dataSubtitle, dataImage, children, isOpen }) {
  return (
    <div
      className={` data__content  ${
        isOpen ? "data__content_is-open" : "data__content_transform"
      }`}
    >
      <h2 className="data__title">{dataTitle}</h2>
      <p className="data__subtitle">{dataSubtitle}</p>
      <div className="data__grid">
        <img src={dataImage} alt="." className="data__graph" />
        <p className="data__text-container">{children}</p>
      </div>
    </div>
  );
}

export default Analysis;