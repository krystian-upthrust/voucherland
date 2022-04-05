import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import { ROUTE_HOME, ROUTE_REGISTER } from "../../utils/routes";
import { IUser } from "../../utils/types";
import { UserContext } from "../../utils/context/UserContext";

export default function LoginPage() {
  const navigate = useNavigate();

  const userContext = useContext(UserContext);

  const [emailValue, setEmailValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");
  const [disable, setDisable] = useState<boolean>(true);

  useEffect(() => {
    if (emailValue === "" || passwordValue === "") {
      setDisable(true);
    } else setDisable(false);
  }, [emailValue, passwordValue]);

  const handleLogin: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    let user: IUser = {
      firstName: "Jane Admin",
      lastName: "doe",
      email: emailValue,
      password: passwordValue,
      admin: true,
    };

    userContext?.setLoggedIn(true);
    userContext?.setUser(user);

    localStorage.setItem("logstate", "true");
    localStorage.setItem("user", JSON.stringify(user));

    navigate(ROUTE_HOME);
  };

  return (
    <section className="login">
      <div className="login_register_image" />
      <div className="login_register_shadow" />

      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="email"
          value={emailValue}
          className="login_email"
          data-testid="login-email-input"
          data-cy="login-email-input"
          onChange={(event) => setEmailValue(event.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={passwordValue}
          className="login_password"
          data-testid="login-password-input"
          data-cy="login-password-input"
          onChange={(event) => setPasswordValue(event.target.value)}
        />
        <div className="checkbox_container">
          <div>
            <div className="input_checkbox">
              <input
                type="checkbox"
                className="login_remember_me"
                data-testid="login-remember-checkbox"
                id="remember_me"
              />
              <span className="costum_input_checkbox"></span>
            </div>

            <label htmlFor="remember_me">remember</label>
          </div>
          <p>forgot password?</p>
        </div>

        <button
          type="submit"
          id="login_btn"
          className="login_btn"
          data-testid="login-login-btn"
          data-cy="login-login-btn"
          disabled={disable}
        >
          login
        </button>
      </form>

      <div className="option">
        <p>no account yet?</p>
        <button
          className="option_btn"
          data-testid="login-register-btn"
          onClick={() => navigate(ROUTE_REGISTER)}
        >
          register
        </button>
      </div>

      <button
        className="back_btn"
        data-testid="login-goback-btn"
        onClick={() => navigate(ROUTE_HOME)}
      >
        <FiArrowLeft className="back_btn_arrow" /> go back
      </button>
    </section>
  );
}
