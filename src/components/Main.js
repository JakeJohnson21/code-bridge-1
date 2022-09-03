import React, { useState } from "react";
import Analysis from "./Analysis";
import Cover from "./Cover";
import MenuBtn from "./MenuBtn";
import Interactive from "./Interactive";

function Main() {
  const [isDataOneOpen, setIsDataOneOpen] = useState(false);
  const [isDataTwoOpen, setIsDataTwoOpen] = useState(false);
  const [isDataThreeOpen, setIsDataThreeOpen] = useState(false);
  const [isDataFourOpen, setIsDataFourOpen] = useState(false);

  const isDataOpen = [
    isDataOneOpen,
    isDataTwoOpen,
    isDataThreeOpen,
    isDataFourOpen,
  ];

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
        <MenuBtn
          button={isDataOneOpen}
          setButton={handleIsDataOneOpen}
          closeAll={handleCloseAllPopups}
        >
          Heat Map
        </MenuBtn>
        <MenuBtn
          button={isDataTwoOpen}
          setButton={handleIsDataTwoOpen}
          closeAll={handleCloseAllPopups}
        >
          map 2
        </MenuBtn>
        <MenuBtn
          button={isDataThreeOpen}
          setButton={handleIsDataThreeOpen}
          closeAll={handleCloseAllPopups}
        >
          map 3
        </MenuBtn>
        <MenuBtn
          button={isDataFourOpen}
          setButton={handleIsDataFourOpen}
          closeAll={handleCloseAllPopups}
        >
          map 4
        </MenuBtn>
      </div>
      <div className="main__content">
        <Cover isDataOpen={isDataOpen} />

        <Analysis
          dataTitle="Airport Heat Map"
          dataSubtitle="I am the subtitle for the airport heat map"
          dataImage=""
          name="one"
          isOpen={isDataOneOpen}
          isClosed={handleCloseAllPopups}
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
        <Interactive
          dataTitle="Emissions"
          dataSubtitle="I am the subtitle for the airport heat map"
          dataImage=""
          name="four"
          isOpen={isDataFourOpen}
        />
      </div>
    </div>
  );
}

export default Main;
