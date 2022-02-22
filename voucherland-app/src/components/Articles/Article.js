import React from "react";
import { FiArrowRight } from "react-icons/fi";

export default function Article({
  article_tag,
  article_title,
  article_image,
  article_read_time,
}) {
  return (
    <article className="article_item">
      <img
        className="article_item_image"
        src={article_image}
        alt="article-pic"
      />

      <div className="article_item_content">
        <p className="tag">{article_tag}</p>
        <h4 className="title">{article_title}</h4>
        <div className="read_article_container">
          <button className="read_article_btn">
            Read article <FiArrowRight className="read_article_btn_arrow" />
          </button>
          <p className="read_time">{article_read_time}</p>
        </div>
      </div>
    </article>
  );
}
