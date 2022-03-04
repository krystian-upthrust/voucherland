import React, { useState } from "react";
import AdminAdmins from "../../components/Admin/Admins/AdminAdmins";
import AdminArticles from "../../components/Admin/Articles/AdminArticles";
import AdminNav from "../../components/Admin/AdminNav";
import AdminVouchers from "../../components/Admin/Vouchers/AdminVouchers";

export default function AdminPage() {
  
  return (
    <section className="admin">
      <AdminNav />
      <div className="admin_content">
         {/* <AdminVouchers /> */}
        <AdminArticles />
         {/* <AdminAdmins /> */}
      </div>
    </section>
  );
}
