import React from "react";
import Article from "./Article";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { ROUTE_ARTICLES } from "../../routes";

export default function Articles() {
  const navigate = useNavigate();
  
  return (
    <section className="articles">
      <div className="articles_header">
        <h2 className="articles_header_title">
          Explore our ideas and future plans
        </h2>
        <button className="articles_header_view_btn desktop" onClick={() => navigate(ROUTE_ARTICLES)}>
          View all articles <FiArrowRight className="btn_arrow" />
        </button>
      </div>

      <div className="articles_items">
        <Article
          article_tag={"Collaboration"}
          article_title={"New collaboration with the cola group"}
          article_image={"./resources/images/bottle-capsule.png"}
          article_read_time={"7 min"}
        />
        <Article
          article_tag={"Collaboration"}
          article_title={"New collaboration with the cola group"}
          article_image={"./resources/images/bottle-capsule.png"}
          article_read_time={"7 min"}
        />
        <Article
          article_tag={"Collaboration"}
          article_title={"New collaboration with the cola group"}
          article_image={"./resources/images/bottle-capsule.png"}
          article_read_time={"7 min"}
        />
        <Article
          article_tag={"Collaboration"}
          article_title={"New collaboration with the cola group"}
          article_image={"./resources/images/bottle-capsule.png"}
          article_read_time={"7 min"}
        />
      </div>

      <button className="articles_header_view_btn mobile" onClick={() => navigate(ROUTE_ARTICLES)}>
        View all articles <FiArrowRight className="btn_arrow" />
      </button>
    </section>
  );
}
