import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTE_ARTICLES, ROUTE_CONTACT, ROUTE_HOME, ROUTE_LOGIN, ROUTE_REGISTER, ROUTE_VOUCHERS } from "../../routes";
// import { FaUserAlt, FaSignOutAlt } from "react-icons/fa";

export default function Nav() {
  const navigate = useNavigate();

  useEffect(() => {
    let home = document
      .getElementById("home")
      .addEventListener("click", function () {
        home.addEventListener("click", () => {
          home.classList.add("active");
          vouchers.classList.remove("active");
          articles.classList.remove("active");
          contact.classList.remove("active");
        });
      });
    let vouchers = document.getElementById("vouchers");
    let articles = document.getElementById("articles");
    let contact = document.getElementById("contact");
  }, []);

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
          <button
            className="nav_register"
            onClick={() => navigate(ROUTE_REGISTER)}
          >
            Register
          </button>
          <button className="nav_login" onClick={() => navigate(ROUTE_LOGIN)}>
            Login
          </button>
        </div>
      </div>

      <div className="login_content_desktop">
        <button
          className="nav_register"
          onClick={() => {
            navigate(ROUTE_REGISTER);
          }}
        >
          Register
        </button>
        <button
          className="nav_login"
          onClick={() => {
            navigate(ROUTE_LOGIN);
          }}
        >
          Login
        </button>
      </div>
    </nav>
  );
}

const PageIndicator = () => {
  let home = document.getElementById("home");
  let vouchers = document.getElementById("vouchers");
  let articles = document.getElementById("articles");
  let contact = document.getElementById("contact");

  home.addEventListener("click", () => {
    home.classList.add("active");
    vouchers.classList.remove("active");
    articles.classList.remove("active");
    contact.classList.remove("active");
  });

  vouchers.addEventListener("click", () => {
    home.classList.remove("active");
    vouchers.classList.add("active");
    articles.classList.remove("active");
    contact.classList.remove("active");
  });

  articles.addEventListener("click", () => {
    home.classList.remove("active");
    vouchers.classList.remove("active");
    articles.classList.add("active");
    contact.classList.remove("active");
  });

  contact.addEventListener("click", () => {
    home.classList.remove("active");
    vouchers.classList.remove("active");
    articles.classList.remove("active");
    contact.classList.add("active");
  });
};
