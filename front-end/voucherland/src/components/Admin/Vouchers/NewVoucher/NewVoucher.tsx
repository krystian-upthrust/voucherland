import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ROUTE_ADMIN_VOUCHERS } from "../../../../utils/routes";
import AdminNav from "../../AdminNav";
import AsideInformation from "./AsideInformation";
import VoucherForm from "./VoucherForm";

export default function NewVoucher() {
  return (
    <section className="admin admin_vouches_nav" data-testid="newvoucher" >
      <AdminNav />

      <div className="admin_content">
        <article className="new_voucher">
          <VoucherForm />
          <AsideInformation />
        </article>
      </div>
    </section>
  );
}
