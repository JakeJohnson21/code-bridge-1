import React from "react";
import MobileCover from "./MobileCover";
import MenuBtn from "./MenuBtn";

function HideMenu({
  isOpen,
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
    <div className={"mobile__menu_is-open mobile__menu"}>
      <div className="mobile__data-btn_container">
        <MenuBtn
          button={dataOneOpen}
          setButton={handleDataOne}
          closeAll={handleCloseAll}
        >
          Heat Map
        </MenuBtn>
        <MenuBtn
          button={dataTwoOpen}
          setButton={handleDataTwo}
          closeAll={handleCloseAll}
        >
          map 2
        </MenuBtn>
        <MenuBtn
          button={dataThreeOpen}
          setButton={handleDataThree}
          closeAll={handleCloseAll}
        >
          map 3
        </MenuBtn>
        <MenuBtn
          button={dataFourOpen}
          setButton={handleDataFour}
          closeAll={handleCloseAll}
        >
          Top 10
        </MenuBtn>
      </div>
      <MobileCover />
    </div>
  );
}
export default HideMenu;
