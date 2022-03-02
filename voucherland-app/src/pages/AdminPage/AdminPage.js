import React, { useState } from "react";
import AdminAdmins from "../../components/Admin/Admins/AdminAdmins";
import AdminArticles from "../../components/Admin/Articles/AdminArticles";
import AdminNav from "../../components/Admin/AdminNav";
import AdminVouchers from "../../components/Admin/Vouchers/AdminVouchers";

export default function AdminPage() {
  const [toggleAdminNav, setToggleAdminNav] = useState({
    vouchers: true,
    articles: false,
    admins: false,
  });

  const ToggleVouchersScreen = () => {
    setToggleAdminNav({
      vouchers: true,
      articles: false,
      admins: false,
    });
  };

  const ToggleArticlesScreen = () => {
    setToggleAdminNav({
      vouchers: false,
      articles: true,
      admins: false,
    });
  };

  const ToggleAdminsScreen = () => {
    setToggleAdminNav({
      vouchers: false,
      articles: false,
      admins: true,
    });
  };

  return (
    <section className="admin">
      <AdminNav />
      <div className="admin_content">
        {toggleAdminNav.vouchers && <AdminVouchers />}
        {toggleAdminNav.articles && <AdminArticles />}
        {toggleAdminNav.admins && <AdminAdmins />}
      </div>
    </section>
  );
}
