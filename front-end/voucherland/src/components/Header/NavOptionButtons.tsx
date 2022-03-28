import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserAlt, FaSignOutAlt } from "react-icons/fa";

import {
  ROUTE_ACCOUNT,
  ROUTE_HOME,
  ROUTE_LOGIN,
  ROUTE_REGISTER,
} from "../../utils/routes";
import { UserContext } from "../../utils/context/UserContext";

export default function NavOptionButtons() {
  const navigate = useNavigate();

  const user = useContext(UserContext);

  const handleLogout: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();

    user?.setLoggedIn(false);
    user?.setUser(null);

    localStorage.setItem("logstate", "false");
    localStorage.setItem("user", "null");

    navigate(ROUTE_HOME);
  };

  return (
    <>
      {!user?.loggedIn ? (
        <>
          <button
            className="nav_register"
            data-testid="nav-register-btn"
            onClick={() => navigate(ROUTE_REGISTER)}
          >
            Register
          </button>
          <button
            className="nav_login"
            data-testid="nav-login-btn"
            onClick={() => navigate(ROUTE_LOGIN)}
          >
            Login
          </button>
        </>
      ) : (
        <>
          <button
            className="account_btn"
            data-testid="nav-account-btn"
            onClick={() => navigate(ROUTE_ACCOUNT)}
          >
            <FaUserAlt /> My account
          </button>
          <button
            className="logout_btn"
            data-testid="nav-logout-btn"
            onClick={handleLogout}
          >
            Log out <FaSignOutAlt />
          </button>
        </>
      )}
    </>
  );
}
