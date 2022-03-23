import React, { useState } from "react";

import {
  FaLockOpen,
  FaLock,
  FaCalendarAlt,
  FaAngleLeft,
  FaPlus,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { ROUTE_ADMIN_ARTICLES } from "../../../utils/routes";
import Tag from "../../Global/Tag";
import AdminNav from "../AdminNav";
import AddTag from "./AddTag";

const tags = [
  {
    title: "recent article",
    color: "green",
  },
  {
    title: "collaboration",
    color: "blue",
  },
  {
    title: "media",
    color: "yellow",
  },
];

export default function NewArticle() {
  const [toggleAddTag, setToggleAddTag] = useState<boolean>(false);
  const [state, setState] = useState<string>("public");

  let title =
    "New collaboration with the group  and some  other chars you can put in a title.";

  // function Truncate(string, number) {
  //   return string.length > number
  //     ? string.substr(0, number - 1) + " ..."
  //     : string;
  // }

  const UnfoldSelect = () => {
    let selectBox: HTMLElement = document.getElementById("selcet_box")!;

    if (!selectBox.classList.contains("unfolded")) {
      selectBox.classList.add("unfolded");
    } else {
      selectBox.classList.remove("unfolded");
    }
  };

  return (
    <section className="admin admin_articles_nav">
      <AdminNav />

      <div className="admin_content">
        <section className="new_article">
          <div className="article_form">
            <h2 className="form_header">
              <FaAngleLeft
                className="header_icon"
                onClick={() => <Link to={ROUTE_ADMIN_ARTICLES} />}
              />
              Article - {title.substring(0, 25) + "..."}
              <span
                className={`state_icon ${
                  state === "public" ? "public_state" : "private_state"
                }`}
              >
                {state === "public" ? <FaLockOpen /> : <FaLock />}
              </span>
            </h2>

            <form>
              <div className="article_details">
                <div className="detials1">
                  <div className="title">
                    <label htmlFor="title">title</label>
                    <textarea name="title" id="title" rows={3} />
                  </div>
                  <div className="tags">
                    <label htmlFor="tags">tags</label>
                    <div className="tags_collection">
                      {tags.map((tag) => (
                        <Tag tag={tag} />
                      ))}

                      <div
                        className="add_tag"
                        onClick={() => setToggleAddTag(true)}
                      >
                        <FaPlus />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="detials2">
                  <div className="state">
                    <label htmlFor="state">state</label>
                    <div
                      id="selcet_box"
                      className="select_box"
                      onClick={UnfoldSelect}
                    >
                      <div
                        className={`select ${
                          state === "public" ? "public" : "private"
                        }`}
                      >
                        {state === "public" ? <FaLockOpen /> : <FaLock />}
                        {state}
                      </div>
                      <div className="options">
                        <p
                          className={`option public`}
                          onClick={() => setState("public")}
                        >
                          <FaLockOpen /> public
                        </p>
                        <p
                          className="option private"
                          onClick={() => setState("private")}
                        >
                          <FaLock /> private
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="image">
                    <label htmlFor="image">image</label>
                    <div className="image_container">
                      <img
                        src="/resources/images/collaboration-desktop.png"
                        alt="article"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="article_main_content">
                <label htmlFor="article_content">content1</label>
                <textarea
                  name="article_content"
                  id="article_content"
                  rows={4}
                />
              </div>

              <div className="subtitle">
                <label htmlFor="subtitle">subtitle</label>
                <textarea name="subtitle" id="subtitle" rows={4} />
              </div>

              <div className="article_subcontent">
                <label htmlFor="article_subcontent">content2</label>
                <textarea
                  name="article_subcontent"
                  id="article_subcontent"
                  rows={4}
                />
              </div>

              <div className="buttons">
                <button className="delete">delete</button>
                <button className="save_btn">save changes</button>
              </div>
            </form>
          </div>

          <aside className="article_specs">
            <div className="created_by">
              <FaCalendarAlt /> <p>Created on feb 15, 2022</p>
            </div>

            <div className="made_by">
              <h4>Made by</h4>
              <div className="name">
                <div className="circle" />
                <p>Jane Doe</p>
              </div>
            </div>
          </aside>
        </section>

        {toggleAddTag && (
          <AddTag
            handleCancelPressed={() => setToggleAddTag(false)}
            handleAddPressed={() => {}}
          />
        )}
      </div>
    </section>
  );
}
