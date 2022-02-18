import React, { useEffect } from "react";
import Nav from "./Nav";
import Banner from "./Banner";

function SetToWindowSize() {
  document.getElementsByTagName("header")[0].style.height =
    window.innerHeight + "px";
  window.addEventListener("resize", () => {
    document.getElementsByTagName("header")[0].style.height =
      window.innerHeight + "px";
  });
}

function ToggleMenu () {
  let nav = document.getElementsByClassName('nav')[0];
  let menu_mobile = document.getElementById('mobile_menu');
  menu_mobile.addEventListener('click', () => {

    if (!menu_mobile.classList.contains('open_menu')) {
      menu_mobile.classList.remove('close_menu');
      menu_mobile.classList.add('open_menu');
      nav.classList.remove('close_nav');
      nav.classList.add('open_nav');
    } else {
      menu_mobile.classList.add('close_menu')
      menu_mobile.classList.remove('open_menu');
      nav.classList.add('close_nav');
      nav.classList.remove('open_nav');
    }
    
  })
}

function Header() {
  useEffect(() => {
    SetToWindowSize();
    ToggleMenu();
  }, []);

  return (
    <header className="header">
      <h1>voucherland</h1>

      {/* nav menu mobile */}
      <div className="nav_menu_mobile close_menu" id="mobile_menu">
        <div className="line" />
        <div className="line line_sided" />
        <div className="line" />
      </div>

      <Nav />
      <Banner />

      <div className="scroller">
        <div className="scroller_ball" />
      </div>
    </header>
  );
}

export default Header;
