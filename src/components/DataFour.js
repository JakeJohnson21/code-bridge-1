import React from "react";
import Analysis from "./Analysis";

function DataFour(props) {
  return (
    <Analysis
      dataTitle={props.dataTitle}
      dataImage={props.dataImage}
      name="four"
      isOpen={props.isOpen}
    ></Analysis>
  );
}
export default DataFour;
