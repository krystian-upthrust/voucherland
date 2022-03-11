import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { ROUTE_ARTICLES_DETAIL } from "../../routes";
import Tag from "../Admin/Articles/Tag";

export default function Article({
  article_tag,
  article_title,
  article_image,
  article_read_time,
}) {
  const navigate = useNavigate();

  return (
    <article className="article_item">
      <img
        className="article_item_image"
        src={article_image}
        alt="article-pic"
      />

      <div className="article_item_content">
        <Tag tag={{"tagTitle" : article_tag}} />
        <h4 className="title">{article_title}</h4>
        <div className="read_article_container">
          <button
            className="read_article_btn"
            onClick={() => navigate(ROUTE_ARTICLES_DETAIL.replace(":id", 5))}
          >
            Read article <FiArrowRight className="read_article_btn_arrow" />
          </button>
          <p className="read_time">{article_read_time}</p>
        </div>
      </div>
    </article>
  );
}
