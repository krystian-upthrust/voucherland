import React, { useEffect } from "react";
import Nav from "./Nav";
import "./../../scss/header.scss";
import Banner from "./Banner";

function SetToWindowSize() {
  document.getElementsByTagName("header")[0].style.height =
    window.innerHeight + "px";
  window.addEventListener("resize", () => {
    document.getElementsByTagName("header")[0].style.height =
      window.innerHeight + "px";
  });
}

function Header() {
  useEffect(() => {
    SetToWindowSize();
  }, []);

  return (
    <header className="header">
      <h1>voucherland</h1>
      
      <div className="nav_menu_mobile">
        <div className="line" />
        <div className="line line_sided" />
        <div className="line" />
      </div>

      <Nav />
      <Banner />

      <div class="scroller">
        <div class="scroller_ball" />
      </div>
    </header>
  );
}

export default Header;
