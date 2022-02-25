import React from "react";

export default function ValidVouchers({ valid_vouchers }) {
  return (
    <article className="account_valid_vouchers">
      <h3>Still valid</h3>
      <div className="valid_vouchers_content">{valid_vouchers}</div>
    </article>
  );
}
