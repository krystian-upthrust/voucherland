import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { ROUTE_HOME, ROUTE_REGISTER } from "../../utils/routes";
import { FiArrowLeft } from "react-icons/fi";

export default function LoginPage() {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [enable, setEnable] = useState(true);

  useEffect(() => {
    if (emailValue === "" && passwordValue === "") {
      setEnable(true);
    } else setEnable(false);
  }, [emailValue, passwordValue]);

  const handleLogin = () => {
    // check email and passwrd

    return <Link to={ROUTE_HOME} />;
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
          onChange={(event) => setEmailValue(event.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={passwordValue}
          className="login_password"
          onChange={(event) => setPasswordValue(event.target.value)}
        />
        <div className="checkbox_container">
          <div>
            <div className="input_checkbox">
              <input
                type="checkbox"
                className="login_remember_me"
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
          onClick={() => <Link to={ROUTE_REGISTER} />}
        >
          register
        </button>
      </div>

      <button className="back_btn" onClick={() => <Link to={ROUTE_HOME} />}>
        <FiArrowLeft className="back_btn_arrow" /> Go back
      </button>
    </section>
  );
}