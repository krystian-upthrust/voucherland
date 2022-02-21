import React from "react";
import { FiArrowLeft } from "react-icons/fi";

export default function RegisterPage() {
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
        <button className="option_btn">Login</button>
      </div>

      <button className="back_btn"> <FiArrowLeft/> Go back</button>
    </section>
  );
}
