import React, { useEffect, useState } from "react";
import axios from "axios";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { IArticle } from "../../utils/types";
import Article from "../../components/Global/Article";

export default function ArticlesPage() {
  const [articlesData, setArticlesData] = useState<IArticle[]>([]);
  const [mediaArticles, setMediaArticles] = useState<IArticle[]>([]);
  const [collaborationArticles, setCollaborationArticles] = useState<IArticle[]>([]);

  useEffect(() => {
    // get recent articles
    axios.get("/data.json").then((response) => {
      let result: IArticle[] = [];
      response.data.articles.forEach((article: IArticle) => {
        if (article.status === "public") {
          result.push(article);
        }
      });
      setArticlesData([result[0], result[1], result[2], result[3]]);
    });

    //get the prop articles for the collaboartion section 
    axios.get("/data.json").then( response => {
      let result: IArticle[] = [];
      response.data.collaborations.forEach((article: IArticle) => {
        result.push(article);
      });
      setCollaborationArticles(result)
    })

    // get prop data for the media articles section
    axios.get("/data.json").then((response) => {
      let result: IArticle[] = [];
      response.data.mediaArticles.forEach((article: IArticle) => {
        result.push(article);
      });
      setMediaArticles(result);
    });
  }, []);

  return (
    <section className="articles">
      <Header />

      <h2>
        <span>Explore</span> Voucherland
      </h2>

      {/* split into components?  */}
      <article className="recent_articles">
        <h3>Recent articles</h3>
        <div className="recent_articles_content">
          {articlesData.map((article) => (
            <Article article={article} key={article.id} />
          ))}
        </div>
      </article>

      <article className="collaborations">
        <h3>Collaborations</h3>
        <div className="collaborations_content">
          {
            collaborationArticles.map( article => <Article article={article} key={article.id}/>)
          }
        </div>
      </article>

      <article className="media">
        <h3>Media</h3>
        <div className="media_content">
          {mediaArticles.map((article) => (
            <Article article={article} key={article.id} />
          ))}
        </div>
      </article>

      <Footer />
    </section>
  );
}
