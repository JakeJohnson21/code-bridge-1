import React from "react";
import Analysis from "./Analysis";

function DataThree(props) {
  return (
    <Analysis
      dataTitle={props.dataTitle}
      dataImage={props.dataImage}
      name="three"
      isOpen={handleIsDataThreeOpen}
    ></Analysis>
  );
}
export default DataThree;
