import React from "react";
import { FaClock } from "react-icons/fa";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Collaboration from "../../components/Home/Collaboration";
import VouchersBanner from "../../components/Vouchers/VouchersBanner";

export default function VouchersPage() {
  return (
    <section className="vouchers" data-testid="voucherspage">
      <Header />
      <VouchersBanner />

      <div className="vouchers_lastchance">
        <h3 className="lastchance">
          <FaClock /> 24/02/2022 - Be quick
        </h3>
        <div className="vouchers_content">
          {/* <Voucher
            store_logo={store_logo}
            product_discount={"-30%"}
            product_name={"Komkommers"}
            product_image={product_image}
            product_description={product_description}
            product_countdown={"17 hours"}
          />
          <Voucher
            store_logo={store_logo}
            product_discount={"-30%"}
            product_name={"Komkommers"}
            product_image={product_image}
            product_description={product_description}
            product_countdown={"17 hours"}
          />
          <Voucher
            store_logo={store_logo}
            product_discount={"-30%"}
            product_name={"Komkommers"}
            product_image={product_image}
            product_description={product_description}
            product_countdown={"17 hours"}
          /> */}
        </div>
      </div>

      <div className="vouchers_secondToLast">
        <h3>
          <FaClock /> 25/02/2022
        </h3>
        <div className="vouchers_content">
          {/* <Voucher
            store_logo={store_logo}
            product_discount={"-30%"}
            product_name={"Komkommers"}
            product_image={product_image}
            product_description={product_description}
            product_countdown={"1 days, 17 hours"}
          />
          <Voucher
            store_logo={store_logo}
            product_discount={"-30%"}
            product_name={"Komkommers"}
            product_image={product_image}
            product_description={product_description}
            product_countdown={"1 days, 17 hours"}
          />
          <Voucher
            store_logo={store_logo}
            product_discount={"-30%"}
            product_name={"Komkommers"}
            product_image={product_image}
            product_description={product_description}
            product_countdown={"1 days, 17 hours"}
          /> */}
        </div>
      </div>

      <Collaboration />

      <div className="vouchers_thirdToLast">
        <h3>
          <FaClock /> 26/02/2022
        </h3>
        <div className="vouchers_content">
          {/* <Voucher
            store_logo={store_logo}
            product_discount={"-30%"}
            product_name={"Komkommers"}
            product_image={product_image}
            product_description={product_description}
            product_countdown={"2 days, 17 hours"}
          />
          <Voucher
            store_logo={store_logo}
            product_discount={"-30%"}
            product_name={"Komkommers"}
            product_image={product_image}
            product_description={product_description}
            product_countdown={"2 days, 17 hours"}
          />
          <Voucher
            store_logo={store_logo}
            product_discount={"-30%"}
            product_name={"Komkommers"}
            product_image={product_image}
            product_description={product_description}
            product_countdown={"2 days, 17 hours"}
          /> */}
        </div>
      </div>

      <Footer />
    </section>
  );
}
