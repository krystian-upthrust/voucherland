import React from "react";

export default function ExpiredVouchers({expired_vouchers}) {
  return (
    <article className="account_expired_vouchers">
      <h3>Expired</h3>
      <div className="expired_vouchers_content">{expired_vouchers}</div>
    </article>
  );
}
