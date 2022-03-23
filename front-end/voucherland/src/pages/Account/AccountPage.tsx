import React, { useState } from "react";

import Newletter from "../../components/Account/Newletter/Newletter";
import Settings from "../../components/Account/Settings/Settings";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

import { ISubNav } from "../../utils/types";


export default function AccountPage() {
  const [subNav, setSubNav] = useState<ISubNav>({
    vouchers: true,
    newletter: false,
    settings: false,
  });

  const SetSubNavigation = (
    vouchers: boolean,
    newletter: boolean,
    settings: boolean
  ) => {
    setSubNav({
      vouchers: vouchers,
      newletter: newletter,
      settings: settings,
    });
  };

  return (
    <section className="account">
      <Header />

      <h2 className="account_banner">
        Hi Jane, <span>how are you?</span>
      </h2>

      <div className="account_options">
        <button
          className={`option ${subNav.vouchers && " active"}`}
          onClick={() => SetSubNavigation(true, false, false)}
        >
          vouchers
        </button>
        <button
          className={`option ${subNav.newletter && " active"}`}
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

        {subNav.newletter && <Newletter />}

        {subNav.settings && <Settings />}
      </div>

      <Footer />
    </section>
  );
}
