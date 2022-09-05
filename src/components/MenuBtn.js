import React from "react";

function MenuBtn({ button, setButton, closeAll, children }) {
  function toggleBtn() {
    if (!button) {
      return setButton();
    }
    return closeAll();
  }

  return (
    <button
      className={`data__menu-btn  ${button ? "data__menu-btn_active" : ""}`}
      onClick={toggleBtn}
      type="button"
    >
      {children}
    </button>
  );
}

export default MenuBtn;
