import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
          navigate("/");
        }}
      >
        voucherland
      </h1>

      <div className="nav_content">
        <ul className="nav_content_menu">
          <li
            id="home"
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </li>
          <li
            id="vouchers"
            onClick={() => {
              navigate("/vouchers");
            }}
          >
            Vouchers
          </li>
          <li
            id="articles"
            onClick={() => {
              navigate("/articles");
            }}
          >
            Articles
          </li>
          <li
            id="contact"
            onClick={() => {
              navigate("/contact");
            }}
          >
            Contact
          </li>
        </ul>

        <div className="login_content_mobile">
          <button
            className="nav_register"
            onClick={() => navigate("/register")}
          >
            Register
          </button>
          <button className="nav_login" onClick={() => navigate("/login")}>
            Login
          </button>
        </div>
      </div>

      <div className="login_content_desktop">
        <button
          className="nav_register"
          onClick={() => {
            navigate("/register");
          }}
        >
          Register
        </button>
        <button
          className="nav_login"
          onClick={() => {
            navigate("/login");
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
