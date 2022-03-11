import React, { useState } from "react";
import PageHeader from "../../components/Admin/PageHeader";
import { FaLockOpen, FaLock, FaDownload } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import Searchbar from "../../components/Admin/Searchbar";
import ArticleTab from "../../components/Admin/Articles/ArticleTab";
import { Article } from "../../components/Admin/Articles/Article";
import PublicArticles from "../../components/Admin/Articles/PublicArticles";
import PrivateArticles from "../../components/Admin/Articles/PrivateArticles";
import DeleteAlertMessage from "../../components/Admin/DeleteAlertMessage";
import AdminNav from "../../components/Admin/AdminNav";
import NewArticle from "../../components/Admin/Articles/NewArticle";

export default function AdminArticles() {
  const [addArticle, setAddArticle] = useState(false);
  const [subNav, setSubNav] = useState({
    public: true,
    private: false,
  });

  return (
    <section className="admin admin_articles_nav">
      <AdminNav />
      <div className="admin_content">
        <section className="admin_articles">
          <article className="articles_header">
            <PageHeader
              pageTitle={"Articles"}
              createTitle={"Create article"}
              handleCreatePressed={() => setAddArticle(true)}
            />
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

        {addArticle && <NewArticle />}
      </div>
    </section>
  );
}
