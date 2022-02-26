import React from "react";
import ExpiredVouchers from "../../components/Account/Vouchers/ExpiredVouchers";
import ValidVouchers from "../../components/Account/Vouchers/ValidVouchers";
import Voucher from "../../components/Voucher/Voucher";
import Header from "../../components/Header/Header";
import Newletter from "../../components/Account/Newletter/Newletter";
import Settings from "../../components/Account/Settings/Settings";

export default function AccountPage() {
  let product_description =
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.";
  let product_image =
    "https://www.pngall.com/wp-content/uploads/2016/04/Cucumber-PNG-HD.png";
  let store_logo =
    "https://upload.wikimedia.org/wikipedia/commons/c/cb/Colruyt_logo.svg";

  let vouchers = [
    <Voucher
      store_logo={store_logo}
      product_discount={"-30%"}
      product_name={"Komkommers"}
      product_image={product_image}
      product_description={product_description}
      product_countdown={"2 days, 17 hours"}
    />,
    <Voucher
      store_logo={store_logo}
      product_discount={"-30%"}
      product_name={"Komkommers"}
      product_image={product_image}
      product_description={product_description}
      product_countdown={"2 days, 17 hours"}
    />,
    <Voucher
      store_logo={store_logo}
      product_discount={"-30%"}
      product_name={"Komkommers"}
      product_image={product_image}
      product_description={product_description}
      product_countdown={"2 days, 17 hours"}
    />
  ];

  let expired_vouchers = [
    <Voucher
      store_logo={store_logo}
      product_discount={"-30%"}
      product_name={"Komkommers"}
      
      product_description={product_description}
      product_countdown={"expired"}
    />,
    <Voucher
      store_logo={store_logo}
      product_discount={"-30%"}
      product_name={"Komkommers"}
      product_description={product_description}
      product_countdown={"expired"}
    />,
    <Voucher
      store_logo={store_logo}
      product_discount={"-30%"}
      product_name={"Komkommers"}
      product_description={product_description}
      product_countdown={"expired"}
    />
  ];

  return (
    <section className="account">

      <Header />
      
      <h2 className="account_banner">
        Hi Krystian, <span>how are you?</span>
      </h2>

      <div className="account_options">
        <button className="option vouchers">vouchers</button>
        <button className="option newletter">newletter</button>
        <button className="option settings">settings</button>
      </div>

      <div className="account_content">
        <ValidVouchers valid_vouchers={vouchers}/>
        <ExpiredVouchers expired_vouchers={expired_vouchers}/>

        <Newletter />

        <Settings />
      </div>
    </section>
  );
}
