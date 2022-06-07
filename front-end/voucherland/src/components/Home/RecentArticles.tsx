import React, {useEffect, useState} from "react";
import { FiArrowRight } from "react-icons/fi";
import {useNavigate} from "react-router-dom";

import { ROUTE_ARTICLES } from "../../utils/routes";
import { IArticle } from "../../utils/types";
import Article from "../Global/Article";
import {BasicUrl} from "../../utils/axios/Axios";
import {RequestRoutes} from "../../utils/axios/RequestRoutes";

interface RecentArticlesProps {
  articles: IArticle[];
}

export default function RecentArticles(): JSX.Element {
    const navigate = useNavigate();

    const [loading, setLoading] = useState<boolean>(true);
    const [articles, setArticles] = useState<IArticle[]>([]);

    useEffect(() => {
        setLoading(true);
        BasicUrl
            .get(RequestRoutes.GetAllPublicArticles)
            .then( response => {
                setArticles([
                    response.data.public_articles[0],
                    response.data.public_articles[1],
                    response.data.public_articles[2],
                    response.data.public_articles[3]
                ]);
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
          onClick={() => navigate(ROUTE_ARTICLES) }
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
        onClick={() => navigate(ROUTE_ARTICLES)}
      >
        View all articles <FiArrowRight className="btn_arrow" />
      </button>
    </section>
  );
}
