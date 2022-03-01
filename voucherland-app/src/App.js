import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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

export default function App() {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{ user: user, setUser: setUser }}>
      <section className="app">
        <Cookies />
        <Router >
          {/* <VoucherDetailPage
            store_image={"https://upload.wikimedia.org/wikipedia/commons/c/cb/Colruyt_logo.svg"}
            product_name={"Komkommers"}
            product_image={"https://www.pngall.com/wp-content/uploads/2016/04/Cucumber-PNG-HD.png"}
            product_discount={"-30%"}
            vouchers_downloads={'965 downloads'}
          /> */}

          {/* <ArticleDetailPage /> */}

          <Routes>
            <Route path="/account" element={<AccountPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/vouchers" element={<VouchersPage />} />
            <Route path="/articles" element={<ArticlesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Router>

      </section>
    </UserContext.Provider>
  );
}
