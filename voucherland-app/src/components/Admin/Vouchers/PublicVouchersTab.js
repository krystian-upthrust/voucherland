import React from "react";

export default function PublicVouchersTab({ vouchers_date, pulbic_vouchers }) {
  return (
    <section className="public_voucher_tabitem">
      <article className="item_header voucher_tab">
        <p className="date">{vouchers_date} </p>
        <div className="colapse_minus">
          <div className="line" />
          <div className="line close_tab" />
        </div>
      </article>

      <article className="vouchers_collection">{pulbic_vouchers}</article>
    </section>
  );
}
