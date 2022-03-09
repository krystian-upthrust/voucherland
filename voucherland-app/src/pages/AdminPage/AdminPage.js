import React, { useState } from "react";
import AdminAdmins from "../../components/Admin/Admins/AdminAdmins";
import AdminArticles from "../../components/Admin/Articles/AdminArticles";
import AdminNav from "../../components/Admin/AdminNav";
import AdminVouchers from "../../components/Admin/Vouchers/AdminVouchers";
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

const routes = [
  {
    path: ROUTE_ADMIN,
        element: <AdminPage />,
        children: [
          {
            path: ROUTE_ADMIN_VOUCHERS,
            element: <AdminVouchers />,
          },
          {
            path: ROUTE_ADMIN_ADD_VOUCHER,
            // element: ,
          },
          {
            path: ROUTE_ADMIN_ARTICLES,
            element: <AdminArticles />,
          },
          {
            path: ROUTE_ADMIN_ADD_ARTICLE,
            element: <AdminArticles />,
          },
          {
            path: ROUTE_ADMIN_ADMINS,
            element: <AdminAdmins />,
          },
        ],
  },
];

const Routes = () => {
  return useRoutes(routes);
};

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
          {/* <AddTag /> */}

          <Routes />
        </div>
      
    </section>
  );
}
