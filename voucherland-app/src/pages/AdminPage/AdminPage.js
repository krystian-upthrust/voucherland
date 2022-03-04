import React, { useState } from "react";
import AdminAdmins from "../../components/Admin/Admins/AdminAdmins";
import AdminArticles from "../../components/Admin/Articles/AdminArticles";
import AdminNav from "../../components/Admin/AdminNav";
import AdminVouchers from "../../components/Admin/Vouchers/AdminVouchers";

export default function AdminPage() {
<<<<<<< HEAD
  
=======
  const [toggleAdminNav, setToggleAdminNav] = useState({
    vouchers: false,
    articles: false,
    admins: true,
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

>>>>>>> 9d476141625e440b97697692509c2514b1408caa
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
