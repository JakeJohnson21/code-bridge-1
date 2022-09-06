import React, { useState } from "react";
import Analysis from "./Analysis";
import Cover from "./Cover";
import MenuBtn from "./MenuBtn";
import MobileMenuBtn from "./MobileMenuBtn";
import HideMenu from "./HideMenu";
import Interactive from "./Interactive";
import barGraph from "../images/BarGraph.jpg";
import lineGraph from "../images/LineGraph.jpg";
import multiGraph from "../images/Multi-graph.png";

function Main() {
  const [isDataOneOpen, setIsDataOneOpen] = useState(false);
  const [isDataTwoOpen, setIsDataTwoOpen] = useState(false);
  const [isDataThreeOpen, setIsDataThreeOpen] = useState(false);
  const [isDataFourOpen, setIsDataFourOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
  /////////////////////////
  function handleMenuOpen() {
    setIsMenuOpen(true);
  }
  // function handleCloseMenu() {
  //   setIsMenuOpen(false);
  // }
  function toggleMenu() {
    handleCloseAllPopups();
    return handleMenuOpen();
  }
  /////////////////////////

  function handleCloseAllPopups() {
    setIsDataOneOpen(false);
    setIsDataTwoOpen(false);
    setIsDataThreeOpen(false);
    setIsDataFourOpen(false);
  }
  return (
    <div className="main__modal">
      <MobileMenuBtn toggleMenu={toggleMenu} />

      <div className="data__menu-btn_container">
        <MenuBtn
          button={isDataOneOpen}
          setButton={handleIsDataOneOpen}
          closeAll={handleCloseAllPopups}
        >
          Delayed...
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
          CO2
        </MenuBtn>
        <MenuBtn
          button={isDataFourOpen}
          setButton={handleIsDataFourOpen}
          closeAll={handleCloseAllPopups}
        >
          Top 10
        </MenuBtn>
      </div>
      <div className="main__content">
        <HideMenu
          isOpen={isMenuOpen}
          dataOneOpen={isDataOneOpen}
          handleDataOne={handleIsDataOneOpen}
          dataTwoOpen={isDataTwoOpen}
          handleDataTwo={handleIsDataTwoOpen}
          dataThreeOpen={isDataThreeOpen}
          handleDataThree={handleIsDataThreeOpen}
          isDataFourOpen={isDataFourOpen}
          handleDataFour={handleIsDataFourOpen}
          handleCloseAll={handleCloseAllPopups}
        />
        <Cover />

        <Analysis
          dataTitle="Airports that can't keep up"
          dataSubtitle="I am the subtitle for the airport heat map"
          dataImage={barGraph}
          name="one"
          isOpen={isDataOneOpen}
          isClosed={handleCloseAllPopups}
        >
          Figure 1: Average pre-departure delays of top 15 airports with most
          delays per flight in 2021. Luxembourg Airport by far had most delays
          per flight in 2021 with an average of 59 minutes. 5 of the top 15 are
          German airports meaning that 33% of the delays happen in Germany among
          the highest ranking. Italy is responsible for 27% of top ranked.
        </Analysis>
        <Analysis
          dataTitle="Emissions at the airport"
          dataSubtitle="I am the subtitle for the emissions"
          dataImage={lineGraph}
          name="two"
          isOpen={isDataTwoOpen}
        >
          Figure 2: Average daily air traffic of top 10 busiest airports in
          Europe from January 2020 to July 2022. Due to COVID-19, there has been
          a significant decrease in air traffic all across Europe. Air traffic
          has slowed down again after each major variant (Delta-Nov 2020,
          Omicron-Nov 2021). iGA Istanbul Airport, Amsterdam - Schiphol, and
          Paris-Charles-de-Gaulle have recovered quicker compared to other
          airports. As of July 2022, London - Heathrow and Madrid - Barajas
          haven't returned to their pre-COVID days.
        </Analysis>
        <Analysis
          dataTitle="CO2 Emissions Per Flight"
          dataSubtitle="I am the subtitle for the covid"
          dataImage={multiGraph}
          name="three"
          isOpen={isDataThreeOpen}
        >
          Figure 3: CO2 emission(in million tonnes) per flight by top 12 states
          with the highest emission from 2010 to 2022. Luxembourg has the
          highest CO2 emission among other states and have worsened
          significantly over time. Cyprus is the only state that has shown a
          slight improvement. The data shows that most of the states had a
          little increase in emission before 2020 which went down during 2020
          due to COVID-19.
        </Analysis>
        <Interactive
          dataTitle="Top 10 Airports"
          dataSubtitle="I am the subtitle for the airport heat map"
          name="four"
          isOpen={isDataFourOpen}
        >
          (Interactive) Figure 4: Daily air traffic of top 10 busiest airports
          in Europe from 2016 to 2021. Until 2020, each airport had a constant
          amount of air traffic which had not changed over the years. During
          pandemic, the passenger traffic reduced significantly due to flight
          restrictions. As of 2021, air traffic in Europe has yet to recover
          fully.
        </Interactive>
      </div>
    </div>
  );
}

export default Main;
