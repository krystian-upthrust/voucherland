import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ROUTE_HOME, ROUTE_REGISTER } from "../../utils/routes";
import { FiArrowLeft } from "react-icons/fi";

export default function LoginPage() {
  const navigate = useNavigate();
  
  const [emailValue, setEmailValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");
  const [enable, setEnable] = useState<boolean>(false);

  useEffect(() => {
    if (emailValue == "" && passwordValue == "") {
      setEnable(true);
    } else setEnable(false);
  }, [emailValue, passwordValue]);

  const handleLogin = () => {
    // check email and passwrd

    return navigate(ROUTE_HOME);
  };

  return (
    <section className="login">
      <div className="login_register_image" />
      <div className="login_register_shadow" />

      <form>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="email"
          value={emailValue}
          className="login_email"
          data-testid="login-email-input"
          onChange={(event) => setEmailValue(event.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={passwordValue}
          className="login_password"
          data-testid="login-password-input"
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
          id="login_btn"
          className="login_btn"
          data-testid="login-login-btn"
          onClick={handleLogin}
          disabled={enable}
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
