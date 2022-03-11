import React from "react";
import { useNavigate } from "react-router-dom";
import Voucher from "../Voucher/Voucher";
import { FiArrowRight } from "react-icons/fi";
import { ROUTE_LOGIN, ROUTE_VOUCHERS } from "../../routes";

export default function TopDeals() {
  const navigate = useNavigate();

  let product_description =
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.";
  let product_image =
    "https://www.pngall.com/wp-content/uploads/2016/04/Cucumber-PNG-HD.png";
  let store_logo =
    "https://upload.wikimedia.org/wikipedia/commons/c/cb/Colruyt_logo.svg";

  return (
    <section className="top_deals">
      <div className="top_deals_header">
        <p className="header_title">Top deals this week</p>
        <button
          className="view_vouchers_btn desktop"
          onClick={() => {
            navigate(ROUTE_VOUCHERS);
          }}
        >
          View all vouchers <FiArrowRight className="view_vouchers_btn_arrow" />
        </button>
      </div>

      <div className="products">
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
        <div className="login_popup login_popup_desktop">
          <div className="login_popup_content">
            <p>Want to claim the voucher?</p>
            <button
              className="login_btn"
              onClick={() => {
                navigate(ROUTE_LOGIN);
              }}
            >
              Login
            </button>
          </div>
        </div>
      )}

      <button
        className="view_vouchers_btn mobile"
        onClick={() => {
          navigate(ROUTE_VOUCHERS);
        }}
      >
        View all vouchers <FiArrowRight className="view_vouchers_btn_arrow" />
      </button>
    </section>
  );
}
