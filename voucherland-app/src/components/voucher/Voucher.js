import React from "react";
import { FiArrowRight, FiClock } from "react-icons/fi";

export default function Voucher({
  store_logo,
  product_discount,
  product_name,
  product_image,
  product_description,
  product_countdown,
}) {
  return (
    <article className="product">
      <div className="product_discount">
        <p>{product_discount}</p>
      </div>

      <div className="product_header">
        <div className="logo">
          <img src={store_logo} alt="logo" />
        </div>
        <p className="product_header_title">{product_name}</p>
      </div>

      <div className="product_image">
        <img src={product_image} alt="product-pic" />
      </div>

      <p className="product_description">{product_description}</p>

      <div className="product_countdown">
        <p>
          <FiClock className="product_countdown_clock" /> {product_countdown}
        </p>
      </div>

      <button className="product_voucher">
        Claim voucher <FiArrowRight className="product_voucher_arrow" />{" "}
      </button>

      {/* when not logged in && mobile only  */}
      {false && (
        <div className="login_popup login_popup_mobile">
          <div className="login_popup_content">
            <p>To claim these vouchers, you must be logged in.</p>
            <button className="login_btn">Login</button>
          </div>
        </div>
      )}
    </article>
  );
}
