import React from "react";
import Article from "./Article";
import { FiArrowRight } from "react-icons/fi";

export default function Articles() {
  return (
    <section className="articles">
      <div className="articles_header">
        <h2 className="articles_header_title">
          Explore our ideas and future plans
        </h2>
        <button className="articles_header_view_btn desktop">
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

      <button className="articles_header_view_btn mobile">
        View all articles <FiArrowRight className="btn_arrow" />
      </button>
    </section>
  );
}
