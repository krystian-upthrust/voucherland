import React from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { ROUTE_HOME, ROUTE_LOGIN } from "../../routes";

export default function RegisterPage() {
  const nagivate = useNavigate();

  return (
    <section className="register">
      <div className="login_register_image" />
      <div className="login_register_shadow" />

      <form>
        <h2>Register</h2>
        <input type="text" placeholder="name" onChange={() => {}} />
        <input type="email" placeholder="email" onChange={() => {}} />
        <input type="password" placeholder="password" onChange={() => {}} />
        <input
          type="password"
          placeholder="confirm password"
          onChange={() => {}}
        />
        <button className="register_btn" disabled>
          Register
        </button>
      </form>

      <div className="option">
        <p>already have an account? </p>
        <button className="option_btn" onClick={() => nagivate(ROUTE_LOGIN)}>
          Login
        </button>
      </div>

      <button className="back_btn" onClick={() => nagivate(ROUTE_HOME)}>
        <FiArrowLeft /> Go back
      </button>
    </section>
  );
}
