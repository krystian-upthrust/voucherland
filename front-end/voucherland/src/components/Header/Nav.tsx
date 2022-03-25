import React from "react";
import { useNavigate } from "react-router-dom";

import {
  ROUTE_ARTICLES,
  ROUTE_CONTACT,
  ROUTE_HOME,
  ROUTE_VOUCHERS,
} from "../../utils/routes";
import NavOptionButtons from "./NavOptionButtons";

export default function Nav() {
  const navigate = useNavigate();

  return (
    <nav className="nav">
      <h1
        className="header_title_desktop"
        data-testid="desktop-header"
        onClick={() => navigate(ROUTE_HOME)}
      >
        voucherland
      </h1>

      <div className="nav_content">
        <ul className="nav_content_menu">
          <li
            id="home"
            data-testid="list-item-home"
            onClick={() => navigate(ROUTE_HOME)}
          >
            Home
          </li>
          <li
            id="vouchers"
            data-testid="list-item-vouchers"
            onClick={() => navigate(ROUTE_VOUCHERS)}
          >
            Vouchers
          </li>
          <li
            id="articles"
            data-testid="list-item-articles"
            onClick={() => navigate(ROUTE_ARTICLES)}
          >
            Articles
          </li>
          <li
            id="contact"
            data-testid="list-item-contact"
            onClick={() => navigate(ROUTE_CONTACT)}
          >
            Contact
          </li>
        </ul>

        <div className="login_content_mobile">
          <NavOptionButtons />
        </div>
      </div>

      <div className="login_content_desktop">
        <NavOptionButtons />
      </div>
    </nav>
  );
}
