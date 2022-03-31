import React from "react";

import Collapsable from "../Collapsable";
import PublicVoucher from "./VoucherOptions/PublicVoucher";

const publicVouchers: JSX.Element[] = [
  <PublicVoucher key={1} />,
  <PublicVoucher key={2} />,
  <PublicVoucher key={3} />,
  <PublicVoucher key={4} />,
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
