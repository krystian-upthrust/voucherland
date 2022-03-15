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
import AdminArticle from "../../components/Admin/Articles/AdminArticle";

// prop data
const searchResult_data = [
  {
    id: 1,
    title: "New collaboration with the cola group",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image: "/resources/images/cola.png",
    tags: [
      {
        tagTitle: "recent article",
        color: "green",
      },
      {
        tagTitle: "collaboration",
        color: "blue",
      },
    ],
    status: "public",
  },
  {
    id: 2,
    title: "New collaboration with the cola group",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image: "/resources/images/cola.png",
    tags: [
      {
        tagTitle: "recent article",
        color: "green",
      },
      {
        tagTitle: "collaboration",
        color: "blue",
      },
    ],
    status: "public",
  },
  {
    id: 3,
    title: "New collaboration with the cola group",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image: "/resources/images/cola.png",
    tags: [
      {
        tagTitle: "recent article",
        color: "green",
      },
      {
        tagTitle: "collaboration",
        color: "blue",
      },
    ],
    status: "private",
  },
  {
    id: 4,
    title: "New collaboration with the cola group",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image: "/resources/images/cola.png",
    tags: [
      {
        tagTitle: "recent article",
        color: "green",
      },
      {
        tagTitle: "collaboration",
        color: "blue",
      },
    ],
    status: "private",
  },
];

export default function AdminArticles() {
  const navigate = useNavigate();
  const [search, setSearch] = useState(false);

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
            <Searchbar
              handleSearch={() => setSearch(true)}
              handleExit={() => setSearch(false)}
            />
          </article>

          {!search && (
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
          )}

          {search && (
            <article className="article_search">
              <h3>3 results</h3>
              <div className="result_search">
              {
                searchResult_data.map( item => <AdminArticle article={item} key={item.id} /> )
              }
              </div>
            </article>
          )}

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
