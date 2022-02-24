import React from "react";
import Voucher from "../Voucher/Voucher";
import { FiArrowRight } from "react-icons/fi";

export default function TopDeals() {
  let product_description =
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.";
  let product_image =
    "https://www.pngall.com/wp-content/uploads/2016/04/Cucumber-PNG-HD.png";
  let store_logo =
    "https://upload.wikimedia.org/wikipedia/commons/c/cb/Colruyt_logo.svg";

  return (
    <section class="top_deals">
      <div class="top_deals_header">
        <p class="header_title">Top deals this week</p>
        <button className="view_vouchers_btn desktop">
          View all vouchers <FiArrowRight className="view_vouchers_btn_arrow" />
        </button>
      </div>

      <div class="products">
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
        />
      </div>

      {/* when user not logged in && desktop only */}
      {true && (
        <div class="login_popup login_popup_desktop">
          <div class="login_popup_content">
            <p>Want to claim the voucher?</p>
            <div class="login_btn">Login</div>
          </div>
        </div>
      )}

      <button className="view_vouchers_btn mobile">
        View all vouchers <FiArrowRight className="view_vouchers_btn_arrow" />
      </button>
    </section>
  );
}
