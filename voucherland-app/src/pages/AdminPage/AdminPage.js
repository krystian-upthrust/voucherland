import React, { useState } from "react";
import AdminAdmins from "../../components/Admin/Admins/AdminAdmins";
import AdminArticles from "../../components/Admin/Articles/AdminArticles";
import AdminNav from "../../components/Admin/AdminNav";
import AdminVouchers from "../../components/Admin/Vouchers/AdminVouchers";
import NewVoucher from "../../components/Admin/Vouchers/NewVoucher";
import NewArticle from "../../components/Admin/Articles/NewArticle";
import AddTag from "../../components/Admin/Articles/AddTag";

export default function AdminPage() {
  return (
    <section className="admin">
      <AdminNav />
      <div className="admin_content">
        {/* <AdminVouchers /> */}
        {/* <NewVoucher /> */}
        {/* <AdminArticles /> */}
        {/* <NewArticle /> */}
        {/* <AdminAdmins /> */}
        <AddTag />
      </div>
    </section>
  );
}
