import React from "react";

function Header() {
  return (
    <header className="header">
      <div className="header__text-content">
        <h1 className="header__title">Air traffic</h1>
        {/* <img src={PlaneCutout} alt="" className="image__plane-cut" /> */}

        <p className="header__subtitle">
          You will receive up to 40 points for your code, up to 40 points for
          your data analysis, the presentation can add up to 30 points to the
          project, and coherent design can add up to 10 points to your project
        </p>
      </div>
    </header>
  );
}

export default Header;
