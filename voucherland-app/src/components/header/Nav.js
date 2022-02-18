import React from "react";

function Nav() {
  return (
    <nav className="nav close_nav">

      <div className="nav_content">
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

    </nav>
  );
}

export default Nav;
