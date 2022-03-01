import React from "react";
import PublicVoucher from "./PublicVoucher";

export default function PublicVouchersTab() {
  return (
    <section className="public_vouchers_tab">

      <h3>Public vouchers</h3>
      <div className="public_voucher_tabitem voucher_tab">
        <div className="item_header">
          <p className="date">friday 18 february</p>
          <div className="colapse_minus">
            <div className="line" />
            <div className="line close_tab" />
          </div>
        </div>

        <div className="vouchers_collection">
            <PublicVoucher />
            <PublicVoucher />
            <PublicVoucher />
        </div>
      </div>
    </section>
  );
}
