import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ROUTE_HOME, ROUTE_LOGIN } from "../../utils/routes";
import { FiArrowLeft } from "react-icons/fi";

export default function RegisterPage() {
  const navigate = useNavigate();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [disable, setDisable] = useState<boolean>(true);

  useEffect(() => {
    if (name == "" || email == "" || password == "" || confirmPassword == "") {
      setDisable(true);
    } else setDisable(false);
  }, [name, email, password, confirmPassword]);

  return (
    <section className="register">
      <div className="login_register_image" />
      <div className="login_register_shadow" />

      <form>
        <h2>Register</h2>
        <input
          type="text"
          placeholder="name"
          data-testid="register-name-input"
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="email"
          placeholder="email"
          data-testid="register-email-input"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          data-testid="register-password-input"
          onChange={(event) => setPassword(event.target.value)}
        />
        <input
          type="password"
          placeholder="confirm password"
          data-testid="register-confirmpassword-input"
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
        <button
          className="register_btn"
          data-testid="register-register-btn"
          disabled={disable}
        >
          register
        </button>
      </form>

      <div className="option">
        <p>already have an account? </p>
        <button
          className="option_btn"
          data-testid="register-login-btn"
          onClick={() => navigate(ROUTE_LOGIN)}
        >
          login
        </button>
      </div>

      <button
        className="back_btn"
        data-testid="register-goback-btn"
        onClick={() => navigate(ROUTE_HOME)}
      >
        <FiArrowLeft /> go back
      </button>
    </section>
  );
}
