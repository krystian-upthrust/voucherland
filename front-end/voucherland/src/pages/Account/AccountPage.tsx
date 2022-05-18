import React, {useContext, useState} from "react";

import Newsletter from "../../components/Account/Newletter/Newsletter";
import Settings from "../../components/Account/Settings/Settings";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

import { ISubNav } from "../../utils/types";
import {UserContext} from "../../utils/context/UserContext";

export default function AccountPage() {
    const userContext = useContext(UserContext);

    const [subNav, setSubNav] = useState<ISubNav>({
    vouchers: true,
    newsletter: false,
    settings: false,
  });

  const SetSubNavigation = (
    vouchers: boolean,
    newsletter: boolean,
    settings: boolean
  ) => {
    setSubNav({
      vouchers: vouchers,
      newsletter: newsletter,
      settings: settings,
    });
  };

  return (
    <section className="account">
      <Header />

      <h2 className="account_banner">
        Hi {userContext?.user?.firstname}, <span>how are you?</span>
      </h2>

      <div className="account_options">
        <button
          className={`option ${subNav.vouchers && " active"}`}
          onClick={() => SetSubNavigation(true, false, false)}
        >
          vouchers
        </button>
        <button
          className={`option ${subNav.newsletter && " active"}`}
          onClick={() => SetSubNavigation(false, true, false)}
        >
          newletter
        </button>
        <button
          className={`option ${subNav.settings && " active"}`}
          onClick={() => SetSubNavigation(false, false, true)}
        >
          settings
        </button>
      </div>

      <div className="account_content">
        {subNav.vouchers && (
          <>
            {/* <ValidVouchers valid_vouchers={vouchers} />
            <ExpiredVouchers expired_vouchers={expired_vouchers} /> */}
          </>
        )}

        {subNav.newsletter && <Newsletter />}

        {subNav.settings && <Settings />}
      </div>

      <Footer />
    </section>
  );
}
