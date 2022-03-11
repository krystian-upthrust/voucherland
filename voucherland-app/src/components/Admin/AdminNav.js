import React, { useState } from "react";
import {
  FaUserAlt,
  FaTicketAlt,
  FaLockOpen,
  FaLock,
  FaSignOutAlt,
} from "react-icons/fa";
import { MdArticle } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import {
  ROUTE_ADMIN_ADMINS,
  ROUTE_ADMIN_ARTICLES,
  ROUTE_ADMIN_VOUCHERS,
} from "../../routes";

export default function AdminNav() {
  const navigate = useNavigate();

  return (
    <nav className="nav">
      <div className="nav_header">
        <h1>V.</h1>
        <ul className="menu">
          <li
            className="active_vouchers_tab"
            onClick={()=> navigate(ROUTE_ADMIN_VOUCHERS)}
          >
            <FaTicketAlt className="icon rotate" /> Vouchers
          </li>
          <li
            className="active_articles_tab"
            onClick={()=> navigate(ROUTE_ADMIN_ARTICLES)}
          >
            <MdArticle className="icon" /> Articles
          </li>
          <li
            className="active_admins_tab"
            onClick={()=> navigate(ROUTE_ADMIN_ADMINS)}
          >
            <FaUserAlt className="icon" /> Admins
          </li>
        </ul>
      </div>

      <div className="nav_footer">
        <div className="admin_profile">
          <div className="profile_icon">
            <FaUserAlt />
          </div>
          <p className="profile_name">Jane Doe</p>
        </div>
        <button className="signout_btn">
          <FaSignOutAlt className="signout_icon" /> Afmelden
        </button>
      </div>
    </nav>
  );
}
