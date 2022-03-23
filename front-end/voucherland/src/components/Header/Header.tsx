import React, { useEffect } from "react";
import { ToggleMenu } from "../../utils/actions";
import Nav from "./Nav";

// ERROR : menu is seen untoggling at the beginning (solution: uselayoutaffect?)

export default function Header() {
  useEffect(() => {
    // function that hiddens the menu in smaller screens
    // and allows the user to toggle and untoggle it
    ToggleMenu();
  }, []);

  return (
    <header className="header">
      <h1 className="header_title_mobile" data-testid="mobile-header">
        voucherland
      </h1>

      {/* nav menu mobile */}
      <div className="nav_menu_mobile close_menu" id="mobile_menu">
        <div className="line" />
        <div className="line line_sided" />
        <div className="line" />
      </div>

      <Nav />
    </header>
  );
}
