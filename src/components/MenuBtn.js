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
      className={`data__menu-btn data__menu-btn_open ${
        button ? "data__menu-btn_active" : ""
      }`}
      onClick={toggleBtn}
      type="button"
    >
      {children}
    </button>
  );
}

export default MenuBtn;
