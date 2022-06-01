import React from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

import { ROUTE_ARTICLES_DETAIL } from "../../utils/routes";
import { IArticle } from "../../utils/types";
import Tag from "./Tag";

interface ArticleProps {
  article: IArticle;
}

export default function Article({ article }: ArticleProps) {
  const navigate = useNavigate();

  return (
    <article className="article_item">
      <img
        className="article_item_image"
        src={`/resources/images/${article.article_image}`}
        alt="article-pic"
      />

      <div className="article_item_content">
          {
              article.tags.length !== 0 && <Tag tag={article.tags[0]} />
          }
        <h4 className="title">{article.title}</h4>
        <div className="read_article_container">
          <button
            className="read_article_btn"
            onClick={() => navigate(ROUTE_ARTICLES_DETAIL.replace(":id", String(article.id)))}
          >
            Read article <FiArrowRight className="read_article_btn_arrow" />
          </button>
          <p className="read_time">{article.read_time} min</p>
        </div>
      </div>
    </article>
  );
}
