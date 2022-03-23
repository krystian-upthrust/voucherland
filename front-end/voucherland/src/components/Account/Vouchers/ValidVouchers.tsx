import React from "react";
import { IVoucher } from "../../../utils/types";

interface ValidVouchersProps {
  valid_vouchers: IVoucher[];
}

export default function ValidVouchers({ valid_vouchers }: ValidVouchersProps) {
  return (
    <article className="account_valid_vouchers">
      <h3>Still valid</h3>
      <div className="valid_vouchers_content">{valid_vouchers}</div>
    </article>
  );
}
