import React from "react";
import MobileCover from "./MobileCover";
import MenuBtn from "./MenuBtn";

function HideMenu({
  dataOneOpen,
  handleDataOne,
  dataTwoOpen,
  handleDataTwo,
  dataThreeOpen,
  handleDataThree,
  dataFourOpen,
  handleDataFour,
  handleCloseAll,
}) {
  return (
    <div className={"mobile__menu"}>
      <div className="mobile__data-btn_container">
        <MenuBtn
          button={dataOneOpen}
          setButton={handleDataOne}
          closeAll={handleCloseAll}
        >
          Delayed
        </MenuBtn>
        <MenuBtn
          button={dataTwoOpen}
          setButton={handleDataTwo}
          closeAll={handleCloseAll}
        >
          Effects of COVID
        </MenuBtn>
        <MenuBtn
          button={dataThreeOpen}
          setButton={handleDataThree}
          closeAll={handleCloseAll}
        >
          Flight CO2
        </MenuBtn>
        <MenuBtn
          button={dataFourOpen}
          setButton={handleDataFour}
          closeAll={handleCloseAll}
        >
          Top 10 european airports
        </MenuBtn>
      </div>
      <MobileCover />
    </div>
  );
}
export default HideMenu;
