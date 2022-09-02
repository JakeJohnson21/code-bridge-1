import React from "react";
import Analysis from "./Analysis";

function DataTwo(props) {
  return (
    <Analysis
      dataTitle={props.dataTitle}
      dataImage={props.dataImage}
      name="two"
      isOpen={props.isOpen}
    ></Analysis>
  );
}
export default DataTwo;
