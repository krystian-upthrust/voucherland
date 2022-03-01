import React from "react";
import { FaUserAlt, FaTicketAlt, FaLockOpen, FaLock, FaSignOutAlt } from "react-icons/fa";
import { MdArticle } from "react-icons/md";

export default function AdminNav() {
  return (
    <nav className="nav">
      <div className="nav_header">
        <h1>V.</h1>
        <ul className="menu">
          <li>
            <FaTicketAlt className="icon rotate" /> Vouchers
          </li>
          <li>
            <MdArticle className="icon" /> Articles
          </li>
          <li>
            <FaUserAlt className="icon" /> Admins
          </li>
        </ul>
      </div>

      <div className="nav_footer">
        <div className="admin_profile">
          <div className="profile_icon">
            <FaUserAlt />
          </div>
          <p className="profile_name">Krystian Rola</p>
        </div>
        <button className="signout_btn">
          <FaSignOutAlt className="signout_icon" /> Afmelden
        </button>
      </div>
    </nav>
  );
}
