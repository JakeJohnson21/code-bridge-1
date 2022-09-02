import React, { useState } from "react";
import DataOne from "./DataOne";
import DataTwo from "./DataTwo";
import DataThree from "./DataOne";
import DataFour from "./DataFour";

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
    <main className="content">
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
        <DataOne
          dataTitle="Airport Heat Map"
          dataImage=""
          isOpen={isDataOneOpen}
        />
        <DataTwo
          dataTitle="Emissions at the airport"
          dataImage=""
          isOpen={isDataTwoOpen}
        />
        <DataThree
          dataTitle="COVID DID WHAT"
          dataImage=""
          isOpen={isDataThreeOpen}
        />
        <DataFour dataTitle="Emissions" dataImage="" isOpen={isDataFourOpen} />
      </div>
    </main>
  );
}

export default Main;
