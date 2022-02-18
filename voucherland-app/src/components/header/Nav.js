import React from "react";

function Nav() {
  return (
    <nav className="nav">

      <div className="nav_content">
        <div className="nav_menu_mobile">
          <div className="line" />
          <div className="line line_sided" />
          <div className="line" />
        </div>

        <ul className="nav_content_menu">
          <li className="active">home</li>
          <li>vouchers</li>
          <li>articles</li>
        </ul>

        <div className="login_content">
          <button className="register">register</button>
          <button className="login">login</button>
        </div>
      </div>

      {/* nav menu mobile? */}
    </nav>
  );
}

export default Nav;
