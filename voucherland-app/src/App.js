import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss";
import "./scss/media_queries.scss";
import "./scss/header.scss";
import "./scss/cookies.scss";
import Header from "./components/header/Header";
import Cookies from "./components/cookies/Cookies";
import HomePage from "./pages/HomePage/HomePage";
import VouchersPage from "./pages/VouchersPage/VouchersPage";
import ArticlesPage from "./pages/ArticlesPage/ArticlesPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import { UserContext } from "./context/UserContaxt";

export default function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  // set cookies

  return (
    <UserContext.Provider value={{ isAdmin: isAdmin, setIsAdmin: setIsAdmin }}>
      <section className="app">
        <Header />
        <Cookies />

        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/vouchers" element={<VouchersPage />} />
            <Route path="/articles" element={<ArticlesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Router>
      </section>
    </UserContext.Provider>
  );
}
