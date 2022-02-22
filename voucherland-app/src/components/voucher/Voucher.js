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
    <article class="product">
      <div class="product_discount">
        <p>{product_discount}</p>
      </div>

      <div class="product_header">
        <div class="logo">
          <img src={store_logo} alt="logo" />
        </div>
        <p class="product_header_title">{product_name}</p>
      </div>

      <div class="product_image">
        <img src={product_image} alt="product-pic" />
      </div>

      <p class="product_description">{product_description}</p>

      <div class="product_countdown">
        <p> <FiClock className="product_countdown_clock"/> {product_countdown}</p>
      </div>

      <button className="product_voucher">Claim voucher <FiArrowRight className="product_voucher_arrow"/> </button>

      {/* when not logged in && mobile only  */}
      {true && (
        <div class="login_popup login_popup_mobile">
          <div class="login_popup_content">
            <p>To claim  these vouchers, you must be logged in.</p>
            <button className="login_btn">Login</button>
          </div>
        </div>
      )}
    </article>
  );
}
