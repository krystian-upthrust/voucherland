import React, {useEffect, useState} from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import { ROUTE_ARTICLES } from "../../utils/routes";
import { IArticle } from "../../utils/types";
import Article from "../Global/Article";
import {BasicUrl} from "../../utils/axios/Axios";
import {RequestRoutes} from "../../utils/axios/RequestRoutes";

interface RecentArticlesProps {
  articles: IArticle[];
}

export default function RecentArticles() {

    const [loading, setLoading] = useState<boolean>(true);
    const [articles, setArticles] = useState<IArticle[]>([]);

    useEffect(() => {
        setLoading(true);
        BasicUrl
            .get(RequestRoutes.GetAllPublicArticles)
            .then( response => {
                setArticles(response.data.articles);
            });

        setLoading(false);
    }, []);


  return (
    <section className="articles" data-testid="articles">
      <div className="articles_header">
        <h2 className="articles_header_title">
          Explore our ideas and future plans
        </h2>
        <button
          className="articles_header_view_btn desktop"
          data-testid="recentarticles-articele-btn"
          onClick={() => <Link to={ROUTE_ARTICLES} />}
        >
          View all articles <FiArrowRight className="btn_arrow" />
        </button>
      </div>

        {
            !loading &&
            <div className="articles_items">
                {articles.map((article: IArticle) => (
                    <Article article={article} key={article.id} />
                ))}
            </div>
        }

      <button
        className="articles_header_view_btn mobile"
        onClick={() => <Link to={ROUTE_ARTICLES} />}
      >
        View all articles <FiArrowRight className="btn_arrow" />
      </button>
    </section>
  );
}
