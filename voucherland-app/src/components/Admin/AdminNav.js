import React, { useState } from "react";
import { FaUserAlt, FaTicketAlt, FaLockOpen, FaLock, FaSignOutAlt } from "react-icons/fa";
import { MdArticle } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { ROUTE_ADMIN_ADMINS, ROUTE_ADMIN_ARTICLES, ROUTE_ADMIN_VOUCHERS } from "../../routes";


export default function AdminNav() {
  const navigate = useNavigate();

  const [active, setActive] = useState({
    vouchers: true,
    articles: false,
    admins: false
  });

  const GoToVouchers = () => {
    setActive({vouchers: true, articles: false, admins: false});
    navigate(ROUTE_ADMIN_VOUCHERS);
  }

  const GoToArticles = () => {
    setActive({vouchers: false, articles: true, admins: false});
    navigate(ROUTE_ADMIN_ARTICLES);
  }

  const GoToAdmins = () => {
    setActive({vouchers: false, articles: false, admins: true});
    navigate(ROUTE_ADMIN_ADMINS);
  }

  return (
    <nav className="nav">
      <div className="nav_header">
        <h1>V.</h1>
        <ul className="menu">
          <li className={`${active.vouchers &&  'active_tab'}`} onClick={GoToVouchers} >
            <FaTicketAlt className="icon rotate" /> Vouchers
          </li>
          <li className={`${active.articles &&  'active_tab'}`} onClick={GoToArticles} >
            <MdArticle className="icon" /> Articles
          </li>
          <li className={`${active.admins &&  'active_tab'}`} onClick={GoToAdmins} >
            <FaUserAlt className="icon" /> Admins
          </li>
        </ul>
      </div>

      <div className="nav_footer">
        <div className="admin_profile">
          <div className="profile_icon">
            <FaUserAlt />
          </div>
          <p className="profile_name">Krystian Rola</p>
        </div>
        <button className="signout_btn">
          <FaSignOutAlt className="signout_icon" /> Afmelden
        </button>
      </div>
    </nav>
  );
}
