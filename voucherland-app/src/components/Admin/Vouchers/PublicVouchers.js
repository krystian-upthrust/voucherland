import React from "react";
import Collapsable from "../Collapsable";
import PublicVoucher from "./PublicVoucher";

const publicVouchers = [
  <PublicVoucher />,
  <PublicVoucher />,
  <PublicVoucher />,
  <PublicVoucher />,
];

export default function PublicVouchers() {
  return (
    <section className="public_vouchers">
      <h3>Public vouchers</h3>

      <div className="public_vouchers_content">
        <Collapsable
          id={1}
          title={"friday 18 march"}
          content={publicVouchers}
          layout={"vouchers_layout"}
        />
        <Collapsable
          id={2}
          title={"saterday 19 march"}
          content={publicVouchers}
          layout={"vouchers_layout"}
        />
        <Collapsable
          id={3}
          title={"monday 21 march"}
          content={publicVouchers}
          layout={"vouchers_layout"}
        />
      </div>
    </section>
  );
}
