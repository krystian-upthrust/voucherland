import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { ROUTE_ARTICLES } from "../../utils/routes";
import { IArticle } from "../../utils/types";
import Article from "../Global/Article";

interface RecentArticlesProps {
  articles :IArticle[]
}

export default function RecentArticles({articles} : RecentArticlesProps) {
  return (
    <section className="articles">
      <div className="articles_header">
        <h2 className="articles_header_title">
          Explore our ideas and future plans
        </h2>
        <button
          className="articles_header_view_btn desktop"
          onClick={() => <Link to={ROUTE_ARTICLES} />}
        >
          View all articles <FiArrowRight className="btn_arrow" />
        </button>
      </div>

      <div className="articles_items">
        {
          articles.map( article => <Article article={article} key={article.id}/>)
        }
      </div>

      <button
        className="articles_header_view_btn mobile"
        onClick={() => <Link to={ROUTE_ARTICLES} />}
      >
        View all articles <FiArrowRight className="btn_arrow" />
      </button>
    </section>
  );
}
