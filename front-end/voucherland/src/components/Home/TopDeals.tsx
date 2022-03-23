import React from "react";
import { useNavigate } from "react-router-dom";

import { ROUTE_LOGIN, ROUTE_VOUCHERS } from "../../utils/routes";
import { FiArrowRight } from "react-icons/fi";
import { IVoucher } from "../../utils/types";
import Voucher from "../Global/Voucher";

interface TopDealsProps {
  vouchers: IVoucher[];
}

export default function TopDeals({ vouchers }: TopDealsProps) {
  const navigate = useNavigate();

  return (
    <section className="top_deals">
      <div className="top_deals_header">
        <p className="header_title">Top deals this week</p>
        <button
          className="view_vouchers_btn desktop"
          onClick={() => navigate(ROUTE_VOUCHERS)}
        >
          View all vouchers <FiArrowRight className="view_vouchers_btn_arrow" />
        </button>
      </div>

      <div className="products">
        {vouchers.map((voucher: IVoucher) => (
          <Voucher voucher={voucher} key={voucher.id} />
        ))}
      </div>

      {/* when user not logged in && desktop only */}
      {true && (
        <div className="login_popup login_popup_desktop">
          <div className="login_popup_content">
            <p>Want to claim the voucher?</p>
            <button className="login_btn" onClick={() => navigate(ROUTE_LOGIN)}>
              Login
            </button>
          </div>
        </div>
      )}

      <button
        className="view_vouchers_btn mobile"
        onClick={() => navigate(ROUTE_VOUCHERS)}
      >
        View all vouchers <FiArrowRight className="view_vouchers_btn_arrow" />
      </button>
    </section>
  );
}