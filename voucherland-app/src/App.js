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

import Header from "./components/header/Header";
import Cookies from "./components/cookies/Cookies";
import HomePage from "./pages/HomePage/HomePage";
import VoucherPage from "./pages/VoucherPage/VoucherPage";
import ArticlesPage from "./pages/ArticlesPage/ArticlesPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import { UserContext } from "./context/UserContaxt";
import Footer from "./components/footer/Footer";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

export default function App() {

  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{ user: user, setUser: setUser }}>
      
      <section className="app">
       
        <Cookies />

        <Router>
          {/* <Header /> */}
          <VoucherPage
            store_image={"https://upload.wikimedia.org/wikipedia/commons/c/cb/Colruyt_logo.svg"}
            product_name={"Komkommers"}
            product_image={"https://www.pngall.com/wp-content/uploads/2016/04/Cucumber-PNG-HD.png"}
            product_discount={"-30%"}
            vouchers_downloads={'965 downloads'}
          />

          {/* <LoginPage /> */}
          {/* <RegisterPage /> */} 
          
          {/* <Routes>
            <Route path="/vouchers" element={<VouchersPage />} />
            <Route path="/articles" element={<ArticlesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes> */}
        </Router>

        <Footer />
      </section>

    </UserContext.Provider>
  );
}
