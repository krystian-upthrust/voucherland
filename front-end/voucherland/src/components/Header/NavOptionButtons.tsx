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
import {LocalStorageService} from "../../utils/LocalStorageService";
import {AuthApi} from "../../utils/axios/Axios";
import {RequestRoutes} from "../../utils/axios/RequestRoutes";
import {log} from "util";

export default function NavOptionButtons() {
  const navigate = useNavigate();

  const user = useContext(UserContext);

  const handleLogout: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();

    if (LocalStorageService.getAccessToken()) {
        AuthApi
            .get(RequestRoutes.LOGOUT)
            .then( () => {
                // clear local storage of all saved tokens
                LocalStorageService.clearToken();

                // set user as logged out in context
                user!.setLoggedIn(false);
                user!.setUser(null);
            })
            .catch( error => { console.log(error); });
    }
    navigate(ROUTE_HOME);
  };

  return (
    <>
      {!user?.loggedIn ? (
        <>
          <button
            className="nav_register"
            data-testid="nav-register-btn"
            data-cy="nav-register-btn"
            onClick={() => navigate(ROUTE_REGISTER)}
          >
            Register
          </button>
          <button
            className="nav_login"
            data-testid="nav-login-btn"
            data-cy="nav-login-btn"
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
            data-cy="nav-account-btn"
            onClick={() => navigate(ROUTE_ACCOUNT)}
          >
            <FaUserAlt /> My account
          </button>
          <button
            className="logout_btn"
            data-testid="nav-logout-btn"
            data-cy="nav-logout-btn"
            onClick={handleLogout}
          >
            Log out <FaSignOutAlt />
          </button>
        </>
      )}
    </>
  );
}
