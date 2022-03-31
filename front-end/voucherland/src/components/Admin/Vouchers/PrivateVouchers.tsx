import React from "react";
import Collapsable from "../Collapsable";
import PrivateVoucher from "./VoucherOptions/PrivateVoucher";

const privateVouchers: JSX.Element[] = [
  <PrivateVoucher />,
  <PrivateVoucher />,
  <PrivateVoucher />,
];

export default function PrivateVouchers() {
  return (
    <section className="private_vouchers">
      <h3>Private vouhchers</h3>

      <div className="private_vouchers_content">
        <Collapsable
          id={1}
          title={"friday 18 april"}
          content={privateVouchers}
          layout={"vouchers_layout"}
        />
        <Collapsable
          id={2}
          title={"saterday 19 april"}
          content={privateVouchers}
          layout={"vouchers_layout"}
        />
        <Collapsable
          id={3}
          title={"monday 21 april"}
          content={privateVouchers}
          layout={"vouchers_layout"}
        />
      </div>
    </section>
  );
}
