import React, { useContext } from "react";
import { FiArrowRight, FiClock } from "react-icons/fi";
import { UserContext } from "../../utils/context/UserContext";

import { IVoucher } from "../../utils/types";

interface VoucherProps {
  voucher: IVoucher;
}

export default function Voucher({ voucher }: VoucherProps) {
  const user = useContext(UserContext);

  return (
    <article className="product">
      <div className="product_discount">
        <p>{voucher.discount}</p>
      </div>

      <div className="product_header">
        <div className="logo">
          <img src={`/resources/images/store/${voucher.store_image}`} alt="logo" />
        </div>
        <p className="product_header_title">{voucher.name}</p>
      </div>

      <div className="product_image">
        <img src={`/resources/images/products/${voucher.product_image}`} alt="product-pic" />
      </div>

      <p className="product_description">{voucher.description}</p>

      <div className="product_countdown">
        <p>
          <FiClock className="product_countdown_clock" /> {voucher.expiry}
        </p>
      </div>

      <button className="product_voucher">
        Claim voucher <FiArrowRight className="product_voucher_arrow" />
      </button>

      {/* when not logged in && mobile only  */}
      {!user?.loggedIn && (
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
