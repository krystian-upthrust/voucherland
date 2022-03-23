import React from "react";
import { Link } from "react-router-dom";

import { ROUTE_HOME, ROUTE_LOGIN } from "../../utils/routes";
import { FiArrowLeft } from "react-icons/fi";

export default function RegisterPage() {
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
        <button
          className="option_btn"
          onClick={() => <Link to={ROUTE_LOGIN} />}
        >
          Login
        </button>
      </div>

      <button className="back_btn" onClick={() => <Link to={ROUTE_HOME} />}>
        <FiArrowLeft /> Go back
      </button>
    </section>
  );
}
