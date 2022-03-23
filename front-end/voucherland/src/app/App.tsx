import React, { FC } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Outlet,
  useRoutes,
} from "react-router-dom";

import "../scss/app.scss";
import "../scss/account.scss";
import "../scss/admin.scss";
import "../scss/articles.scss";
import "../scss/contact.scss";
import "../scss/cookies.scss";
import "../scss/footer.scss";
import "../scss/header.scss";
import "../scss/home.scss";
import "../scss/login_register.scss";
import "../scss/media_queries.scss";
import "../scss/variables.scss";
import "../scss/voucherpage.scss";
import "../scss/vouchers.scss";

import {
  ROUTE_ACCOUNT,
  ROUTE_ADMIN,
  ROUTE_ADMIN_ADD_ARTICLE,
  ROUTE_ADMIN_ADD_VOUCHER,
  ROUTE_ADMIN_ADMINS,
  ROUTE_ADMIN_ARTICLES,
  ROUTE_ADMIN_VOUCHERS,
  ROUTE_ARTICLES,
  ROUTE_ARTICLES_DETAIL,
  ROUTE_CONTACT,
  ROUTE_HOME,
  ROUTE_LOGIN,
  ROUTE_REGISTER,
  ROUTE_VOUCHERS,
} from "../utils/routes";
import LoginPage from "../pages/Login/LoginPage";
import RegisterPage from "../pages/Register/RegisterPage";
import AccountPage from "../pages/Account/AccountPage";
import AdminVouchers from "../pages/Admin/AdminVouchers";
import AdminArticles from "../pages/Admin/AdminArticles";
import AdminAdmins from "../pages/Admin/AdminAdmins";
import NewVoucher from "../components/Admin/Vouchers/NewVoucher";
import ContactPage from "../pages/Contact/ContactPage";
import ArticleDetailPage from "../pages/Articles/ArticleDetailPage";
import ArticlesPage from "../pages/Articles/ArticlesPage";
import VouchersPage from "../pages/Vouchers/VouchersPage";
import Home from "../pages/Home/Home";
import NewArticle from "../components/Admin/Articles/NewArticle";
import Cookies from "../components/Cookies/Cookies";

const routes = [
  {
    path: ROUTE_HOME,
    element: <Outlet />,
    // element: !user ? <Navigate to={ROUTE_AUTH_LOGIN} /> : <Layout />,
    children: [
      {
        path: ROUTE_HOME,
        element: <Home />,
      },
      {
        path: ROUTE_VOUCHERS,
        element: <VouchersPage />,
        children: [
          // {
          //   path: ROUTE_VOUCHERS_DETAIL,
          //   element: ,
          // },
        ],
      },
      {
        path: ROUTE_ARTICLES,
        element: <Outlet />,
        children: [
          {
            path: ROUTE_ARTICLES,
            element: <ArticlesPage />,
          },
          {
            path: ROUTE_ARTICLES_DETAIL,
            element: <ArticleDetailPage />,
          },
        ],
      },
      {
        path: ROUTE_CONTACT,
        element: <ContactPage />,
      },
      {
        path: ROUTE_LOGIN,
        element: <LoginPage />,
      },
      {
        path: ROUTE_REGISTER,
        element: <RegisterPage />,
      },
      {
        path: ROUTE_ACCOUNT,
        element: <AccountPage />,
      },
      {
        path: ROUTE_ADMIN,
        element: <Outlet />,
        children: [
          {
            path: ROUTE_ADMIN,
            element: <Navigate to={ROUTE_ADMIN_VOUCHERS} />,
          },
          {
            path: ROUTE_ADMIN_VOUCHERS,
            element: <AdminVouchers />,
          },
          {
            path: ROUTE_ADMIN_ARTICLES,
            element: <AdminArticles />,
          },
          {
            path: ROUTE_ADMIN_ADMINS,
            element: <AdminAdmins />,
          },
          {
            path: ROUTE_ADMIN_ADD_VOUCHER,
            element: <NewVoucher />,
          },
          {
            path: ROUTE_ADMIN_ADD_ARTICLE,
            element: <NewArticle />,
          },
        ],
      },
    ],
  },
];

const Routes: FC = () => {
  return useRoutes(routes);
};

function App() {
  return (
    <section className="app">
      <Cookies />

      <Router>
        <Routes />
      </Router>
    </section>
  );
}

export default App;
