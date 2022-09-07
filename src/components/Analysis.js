import React, { useState } from "react";

function Analysis({ dataTitle, dataImage, children, isOpen }) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  function handlePreviewOpen() {
    setIsPreviewOpen(true);
  }

  return (
    <div
      className={` data__content  ${
        isOpen ? "data__content_is-open" : "data__content_transform"
      }`}
    >
      <h2 className="data__title">{dataTitle}</h2>
      <div className="data__grid">
        <img
          src={dataImage}
          onClick={handlePreviewOpen}
          alt="graph"
          className="data__graph"
        />
        <p className="data__text-container">{children}</p>
      </div>
    </div>
  );
}

export default Analysis;
