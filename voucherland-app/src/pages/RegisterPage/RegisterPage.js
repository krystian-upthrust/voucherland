import React from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

export default function RegisterPage() {
  const nagivate = useNavigate();

  return (
    <section className="register">
      <div className="login_register_image" />
      <div className="login_register_shadow" />

      <form>
        <h2>Register</h2>
        <input type="text" placeholder="name" />
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <input type="password" placeholder="confirm password" />
        <button className="register_btn">Register</button>
      </form>

      <div className="option">
        <p>already have an account? </p>
        <button className="option_btn" onClick={() => nagivate("/login")}>
          Login
        </button>
      </div>

      <button className="back_btn" onClick={() => nagivate("/")}>
        {" "}
        <FiArrowLeft /> Go back
      </button>
    </section>
  );
}
