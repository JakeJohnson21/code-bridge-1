import React from "react";
import Analysis from "./Analysis";

function DataThree(props) {
  return (
    <Analysis
      dataTitle={props.dataTitle}
      dataImage={props.dataImage}
      isOpen={props.isOpen}
      name="one"
    ></Analysis>
  );
}
export default DataThree;
