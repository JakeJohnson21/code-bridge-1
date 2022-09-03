import React, { useState } from "react";
import Analysis from "./Analysis";
import Cover from "./Cover";

function Main() {
  const [isDataOneOpen, setIsDataOneOpen] = useState(false);
  const [isDataTwoOpen, setIsDataTwoOpen] = useState(false);
  const [isDataThreeOpen, setIsDataThreeOpen] = useState(false);
  const [isDataFourOpen, setIsDataFourOpen] = useState(false);

  function handleIsDataOneOpen() {
    handleCloseAllPopups();
    setIsDataOneOpen(true);
  }
  function handleIsDataTwoOpen() {
    handleCloseAllPopups();
    setIsDataTwoOpen(true);
  }
  function handleIsDataThreeOpen() {
    handleCloseAllPopups();
    setIsDataThreeOpen(true);
  }
  function handleIsDataFourOpen() {
    handleCloseAllPopups();
    setIsDataFourOpen(true);
  }
  function handleCloseAllPopups() {
    setIsDataOneOpen(false);
    setIsDataTwoOpen(false);
    setIsDataThreeOpen(false);
    setIsDataFourOpen(false);
  }

  return (
    <div className="main__modal">
      <div className="data__menu-btn_container">
        <button
          className="data__menu-btn"
          onClick={handleIsDataOneOpen}
          type="button"
        ></button>
        <button
          className="data__menu-btn"
          onClick={handleIsDataTwoOpen}
          type="button"
        ></button>
        <button
          className="data__menu-btn"
          onClick={handleIsDataThreeOpen}
          type="button"
        ></button>
        <button
          className="data__menu-btn"
          onClick={handleIsDataFourOpen}
          type="button"
        ></button>
      </div>
      <Cover />
      <Analysis
        dataTitle="Airport Heat Map"
        dataSubtitle="I am the subtitle for the airport heat map"
        dataImage=""
        name="one"
        isOpen={isDataOneOpen}
      />
      <Analysis
        dataTitle="Emissions at the airport"
        dataSubtitle="I am the subtitle for the emissions"
        dataImage=""
        name="two"
        isOpen={isDataTwoOpen}
      />
      <Analysis
        dataTitle="COVID DID WHAT"
        dataSubtitle="I am the subtitle for the covid"
        dataImage=""
        name="three"
        isOpen={isDataThreeOpen}
      />
      <Analysis
        dataTitle="Emissions"
        dataSubtitle="I am the subtitle for the airport heat map"
        dataImage=""
        name="four"
        isOpen={isDataFourOpen}
      />
    </div>
  );
}

export default Main;
