import React, { useState } from "react";
import PageHeader from "../../components/Admin/PageHeader";
import { FaLockOpen, FaLock } from "react-icons/fa";
import Searchbar from "../../components/Admin/Searchbar";
import PublicArticles from "../../components/Admin/Articles/PublicArticles";
import PrivateArticles from "../../components/Admin/Articles/PrivateArticles";
import DeleteAlertMessage from "../../components/Admin/DeleteAlertMessage";
import AdminNav from "../../components/Admin/AdminNav";
import NewArticle from "../../components/Admin/Articles/NewArticle";
import { useNavigate } from "react-router-dom";
import { ROUTE_ADMIN_ADD_ARTICLE } from "../../routes";

export default function AdminArticles() {
  const navigate = useNavigate();

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
              handleCreatePressed={() => navigate(ROUTE_ADMIN_ADD_ARTICLE)}
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
      </div>
    </section>
  );
}
