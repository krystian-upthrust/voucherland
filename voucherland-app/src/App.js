import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  useRoutes,
} from "react-router-dom";

import "./App.scss";
import "./scss/media_queries.scss";
import "./scss/header.scss";
import "./scss/cookies.scss";
import "./scss/footer.scss";
import "./scss/home.scss";
import "./scss/login_register.scss";
import "./scss/voucherpage.scss";
import "./scss/articles.scss";
import "./scss/contact.scss";
import "./scss/vouchers.scss";
import "./scss/account.scss";
import "./scss/admin.scss";

import Header from "./components/Header/Header";
import Cookies from "./components/Cookies/Cookies";
import HomePage from "./pages/HomePage/HomePage";
import VoucherDetailPage from "./pages/VoucherDetailPage/VoucherDetailPage";
import ArticlesPage from "./pages/ArticlesPage/ArticlesPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import { UserContext } from "./context/UserContaxt";
import Footer from "./components/Footer/Footer";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ArticleDetailPage from "./pages/ArticlesPage/ArticleDetailPage";
import VouchersPage from "./pages/VouchersPage/VouchersPage";
import AccountPage from "./pages/AccountPage/AccountPage";
import AdminPage from "./pages/AdminPage/AdminPage";

import {
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
  ROUTE_VOUCHERS_DETAIL,
} from "./routes";
import AdminVouchers from "./pages/AdminPage/AdminVouchers";
import AdminArticles from "./pages/AdminPage/AdminArticles";
import AdminAdmins from "./pages/AdminPage/AdminAdmins";
import NewArticle from "./components/Admin/Articles/NewArticle";
import NewVoucher from "./components/Admin/Vouchers/NewVoucher";

const routes = [
  {
    path: ROUTE_HOME,
    // element: !user ? <Navigate to={ROUTE_AUTH_LOGIN} /> : <Layout />,
    children: [
      {
        path: ROUTE_HOME,
        element: <HomePage />,
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
        element: <ArticlesPage />,
        children: [],
      },
      {
        path: ROUTE_ARTICLES_DETAIL,
        element: <ArticleDetailPage />,
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
        path: ROUTE_ADMIN,
            element: <AdminVouchers />,
            children: [
              {
                path: ROUTE_ADMIN_VOUCHERS,
                element: <AdminVouchers />,
              },
              
              
            ],
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
    ],
  },
];

const Routes = () => {
  return useRoutes(routes);
};

export default function App() {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{ user: user, setUser: setUser }}>
      <section className="app">
        <Cookies />
        <Router>
          {/* <VoucherDetailPage
            store_image={"https://upload.wikimedia.org/wikipedia/commons/c/cb/Colruyt_logo.svg"}
            product_name={"Komkommers"}
            product_image={"https://www.pngall.com/wp-content/uploads/2016/04/Cucumber-PNG-HD.png"}
            product_discount={"-30%"}
            vouchers_downloads={'965 downloads'}
          /> */}

          {/* <ArticleDetailPage /> */}

          <Routes />
        </Router>
      </section>
    </UserContext.Provider>
  );
}
