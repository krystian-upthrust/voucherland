import React, { useState } from "react";
import AdminAdmins from "./AdminAdmins";
import AdminArticles from "./AdminArticles";
import AdminNav from "../../components/Admin/AdminNav";
import AdminVouchers from "./AdminVouchers";
import NewVoucher from "../../components/Admin/Vouchers/NewVoucher";
import NewArticle from "../../components/Admin/Articles/NewArticle";
import AddTag from "../../components/Admin/Articles/AddTag";
import { useRoutes } from "react-router-dom";
import {
  ROUTE_ADMIN,
  ROUTE_ADMIN_ADD_ARTICLE,
  ROUTE_ADMIN_ADD_VOUCHER,
  ROUTE_ADMIN_ADMINS,
  ROUTE_ADMIN_ARTICLES,
  ROUTE_ADMIN_VOUCHERS,
  ROUTE_HOME,
} from "../../routes";


export default function AdminPage() {
  return (
    <section className="admin">
      
        <AdminNav />
        <div className="admin_content">
        
        
          
        </div>
      
    </section>
  );
}
