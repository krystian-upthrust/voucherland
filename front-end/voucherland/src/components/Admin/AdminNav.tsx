import React, {useContext, MouseEvent} from "react";
import { MdArticle } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { FaUserAlt, FaTicketAlt, FaSignOutAlt } from "react-icons/fa";
import {
  ROUTE_ADMIN_ADMINS,
  ROUTE_ADMIN_ARTICLES,
  ROUTE_ADMIN_VOUCHERS, ROUTE_HOME,
} from "../../utils/routes";
import {UserContext} from "../../utils/context/UserContext";
import {AuthApi} from "../../utils/axios/Axios";
import {RequestRoutes} from "../../utils/axios/RequestRoutes";
import {LocalStorageService} from "../../utils/LocalStorageService";

export default function AdminNav() {
  const navigate = useNavigate();
  const userContext = useContext(UserContext);

  const handleLogout :  React.MouseEventHandler<HTMLButtonElement> = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (LocalStorageService.getAccessToken()){
      AuthApi
          .get(RequestRoutes.LOGOUT)
          .then( () => {
            // clear local storage of all saved tokens
            LocalStorageService.clearToken();

            // set user as logged out in context
            userContext?.setLoggedIn(false);
            userContext?.setUser(null);

            navigate(ROUTE_HOME);
          })
          .catch( error => { console.log(error); });
    }
  }

  return (
    <nav className="nav" data-testid="adminnav">
      <div className="nav_header">
        <h1>V.</h1>
        <ul className="menu">
          <li
            className="active_vouchers_tab"
            data-testid="adminnav-vouchers"
            onClick={() => navigate(ROUTE_ADMIN_VOUCHERS)}
          >
            <FaTicketAlt className="icon rotate" /> Vouchers
          </li>
          <li
            className="active_articles_tab"
            data-testid="adminnav-articles"
            onClick={() => navigate(ROUTE_ADMIN_ARTICLES)}
          >
            <MdArticle className="icon" /> Articles
          </li>
          <li
            className="active_admins_tab"
            data-testid="adminnav-admins"
            onClick={() => navigate(ROUTE_ADMIN_ADMINS)}
          >
            <FaUserAlt className="icon" /> Admins
          </li>
        </ul>
      </div>

      <div className="nav_footer">
        <div className="admin_profile">
          <div className="profile_icon">
            <FaUserAlt />
          </div>
          <p className="profile_name">{userContext?.user?.firstname} {userContext?.user?.lastname}</p>
        </div>
        <button className="signout_btn" data-testid="adminnav-logout-btn" onClick={handleLogout}>
          <FaSignOutAlt className="signout_icon" /> Log out
        </button>
      </div>
    </nav>
  );
}
