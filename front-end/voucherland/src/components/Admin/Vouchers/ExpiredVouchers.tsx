import React from "react";
import Collapsable from "../Collapsable";
import ExpiredVoucher from "./ExpiredVoucher";

const expiredVouchers: JSX.Element[] = [
  <ExpiredVoucher />,
  <ExpiredVoucher />,
];

export default function ExpiredVouchers() {
  return (
    <section className="expired_vouchers">
      <h3>Expired vouchers</h3>

      <div className="expired_vouchers_content">
        <Collapsable
          id={1}
          title={"friday 18 january"}
          content={expiredVouchers}
          layout={"vouchers_layout"}
        />
        <Collapsable
          id={2}
          title={"saterday 19 january"}
          content={expiredVouchers}
          layout={"vouchers_layout"}
        />
        <Collapsable
          id={3}
          title={"monday 21 january"}
          content={expiredVouchers}
          layout={"vouchers_layout"}
        />
      </div>
    </section>
  );
}
