import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ROUTE_ACCOUNT,
  ROUTE_ARTICLES,
  ROUTE_CONTACT,
  ROUTE_HOME,
  ROUTE_LOGIN,
  ROUTE_REGISTER,
  ROUTE_VOUCHERS,
} from "../../routes";
import { FaUserAlt, FaSignOutAlt } from "react-icons/fa";

export default function Nav() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <nav className="nav">
      <h1
        className="header_title_desktop"
        onClick={() => {
          navigate(ROUTE_HOME);
        }}
      >
        voucherland
      </h1>

      <div className="nav_content">
        <ul className="nav_content_menu">
          <li
            id="home"
            onClick={() => {
              navigate(ROUTE_HOME);
            }}
          >
            Home
          </li>
          <li
            id="vouchers"
            onClick={() => {
              navigate(ROUTE_VOUCHERS);
            }}
          >
            Vouchers
          </li>
          <li
            id="articles"
            onClick={() => {
              navigate(ROUTE_ARTICLES);
            }}
          >
            Articles
          </li>
          <li
            id="contact"
            onClick={() => {
              navigate(ROUTE_CONTACT);
            }}
          >
            Contact
          </li>
        </ul>

        <div className="login_content_mobile">
          {!loggedIn ? (
            <>
              <button
                className="nav_register"
                onClick={() => navigate(ROUTE_REGISTER)}
              >
                Register
              </button>
              <button
                className="nav_login"
                onClick={() => navigate(ROUTE_LOGIN)}
              >
                Login
              </button>
            </>
          ) : (
            <>
              <button
                className="account_btn"
                onClick={() => navigate(ROUTE_ACCOUNT)}
              >
                <FaUserAlt /> My account
              </button>
              <button className="logout_btn">
                Log out <FaSignOutAlt />
              </button>
            </>
          )}
        </div>
      </div>

      <div className="login_content_desktop">
        {!loggedIn ? (
          <>
            <button
              className="nav_register"
              onClick={() => navigate(ROUTE_REGISTER)}
            >
              Register
            </button>
            <button className="nav_login" onClick={() => navigate(ROUTE_LOGIN)}>
              Login
            </button>
          </>
        ) : (
          <>
            <button
              className="account_btn"
              onClick={() => navigate(ROUTE_ACCOUNT)}
            >
              <FaUserAlt /> My account
            </button>
            <button className="logout_btn">
              Log out <FaSignOutAlt />
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
