import React, { useState } from "react";
import PageHeader from "../PageHeader";
import { FaLockOpen, FaLock, FaDownload } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import Searchbar from "../Searchbar";
import ArticleTab from "./ArticleTab";
import { Article } from "./Article";
import PublicArticles from "./PublicArticles";
import PrivateArticles from "./PrivateArticles";
import DeleteAlertMessage from "../DeleteAlertMessage";

export default function AdminArticles() {
  const [subNav, setSubNav] = useState({
    public: true,
    private: false,
  });

  return (
    <section className="admin_articles">
      <article className="articles_header">
        <PageHeader pageTitle={"Articles"} createTitle={"Create article"} />
        <Searchbar />
      </article>

      <article className="article_container">
        <div className="admin_sub_menu">
          <ul>
            <li
              className={`menu_item ${subNav.public && "public"}`}
              onClick={() => setSubNav({ public: true, private: false })}
            >
              <FaLockOpen /> public
            </li>
            <li
              className={`menu_item ${subNav.private && "private"}`}
              onClick={() => setSubNav({ public: false, private: true })}
            >
              <FaLock /> private
            </li>
          </ul>
        </div>

        {subNav.public && <PublicArticles />}
        {subNav.private && <PrivateArticles />}
      </article>

      {false && (
        <DeleteAlertMessage
          deleteTitle={"Delete articles"}
          deleteAmount={"2 articles"}
          cancelPressed={() => {}}
          deletePressed={() => {}}
        />
      )}
    </section>
  );
}
