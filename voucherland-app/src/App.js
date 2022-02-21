import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss";
import "./scss/media_queries.scss";
import "./scss/header.scss";
import "./scss/cookies.scss";
import "./scss/footer.scss";
import "./scss/home.scss";
import "./scss/login_register.scss";
import Header from "./components/header/Header";
import Cookies from "./components/cookies/Cookies";
import HomePage from "./pages/HomePage/HomePage";
import VouchersPage from "./pages/VouchersPage/VouchersPage";
import ArticlesPage from "./pages/ArticlesPage/ArticlesPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import { UserContext } from "./context/UserContaxt";
import Footer from "./components/footer/Footer";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

export default function App() {

  const [user, setUser] = useState({});

  // set cookies

  return (
    <UserContext.Provider value={{ user: user, setUser: setUser }}>
      
      <section className="app">
        {/* <Header /> */}
        <Cookies />

        <Router>
          {/* <Header /> */}

          <LoginPage />
          {/* <RegisterPage /> */} 
          
          {/* <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/vouchers" element={<VouchersPage />} />
            <Route path="/articles" element={<ArticlesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes> */}
        </Router>

        {/* <Footer /> */}
      </section>

    </UserContext.Provider>
  );
}
