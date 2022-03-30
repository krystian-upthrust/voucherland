import React, { useState } from "react";
import { FaLockOpen, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import AdminNav from "../../components/Admin/AdminNav";
import AdminArticle from "../../components/Admin/Articles/AdminArticle";
import PrivateArticles from "../../components/Admin/Articles/PrivateArticles";
import PublicArticles from "../../components/Admin/Articles/PublicArticles";
import DeleteAlertMessage from "../../components/Admin/DeleteAlertMessage";
import PageHeader from "../../components/Admin/PageHeader";
import Searchbar from "../../components/Admin/Searchbar";

import { ROUTE_ADMIN_ADD_ARTICLE } from "../../utils/routes";
import { IAdminSubNav, IArticle } from "../../utils/types";

// prop data
const searchResult_data: IArticle[] = [
  {
    id: 1,
    title: "New collaboration with the cola group",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image_URL: "/resources/images/cola.png",
    content: "",
    sub_title: "",
    sub_content: "",
    tags: [
      {
        title: "recent article",
        color: "green",
      },
      {
        title: "collaboration",
        color: "blue",
      },
    ],
    read_time: "",
    status: "public",
  },
  {
    id: 2,
    title: "New collaboration with the cola group",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image_URL: "/resources/images/cola.png",
    content: "",
    sub_title: "",
    sub_content: "",
    tags: [
      {
        title: "recent article",
        color: "green",
      },
      {
        title: "collaboration",
        color: "blue",
      },
    ],
    read_time: "",
    status: "public",
  },
  {
    id: 3,
    title: "New collaboration with the cola group",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image_URL: "/resources/images/cola.png",
    content: "",
    sub_title: "",
    sub_content: "",
    tags: [
      {
        title: "recent article",
        color: "green",
      },
      {
        title: "collaboration",
        color: "blue",
      },
    ],
    read_time: "",
    status: "private",
  },
  {
    id: 4,
    title: "New collaboration with the cola group",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image_URL: "/resources/images/cola.png",
    content: "",
    sub_title: "",
    sub_content: "",
    tags: [
      {
        title: "recent article",
        color: "green",
      },
      {
        title: "collaboration",
        color: "blue",
      },
    ],
    read_time: "",
    status: "private",
  },
];

export default function AdminArticles() {
  const navigate = useNavigate();
  const [search, setSearch] = useState<boolean>(false);
  const [subNav, setSubNav] = useState<IAdminSubNav>({
    public: true,
    private: false,
  });

  return (
    <section className="admin admin_articles_nav" data-testid="adminarticles" >
      <AdminNav />

      <div className="admin_content">
        <section className="admin_articles">
          <article className="articles_header">
            <PageHeader
              pageTitle={"Articles"}
              createTitle={"Create article"}
              handleCreatePressed={() => navigate(ROUTE_ADMIN_ADD_ARTICLE)}
              handleDeletePressed={() => {}}
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
                {searchResult_data.map((item) => (
                  <AdminArticle article={item} key={item.id} />
                ))}
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
