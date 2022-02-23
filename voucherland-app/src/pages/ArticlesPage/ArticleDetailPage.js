import React from "react";
import Article from "../../components/Articles/Article";
import Header from "../../components/header/Header";
import { FiArrowLeft } from "react-icons/fi";

export default function ArticleDetailPage() {
  return (
    <section className="article_details">
      <Header />

      <article className="article_details_content">
        <h2>New collaboration with the cola group</h2>
        <div className="article_banner">
          <img src="./resources/images/article-pic.png" alt="article-pic" />
        </div>

        <div className="article_text_content">
          <p className="article_main_text">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="article_main_text">
            If you are going to use a passage of Lorem Ipsum, you need to be
            sure there isn't anything embarrassing hidden in the middle of text.
            All the Lorem Ipsum generators on the Internet tend to repeat
            predefined chunks.
          </p>

          <h3 className="article_intertitle">
            Just another title to fill the page
          </h3>

          <p className="article_additional_text">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="article_additional_text">
            If you are going to use a passage of Lorem Ipsum, you need to be
            sure there isn't anything embarrassing hidden in the middle of text.
            All the Lorem Ipsum generators on the Internet tend to repeat
            predefined chunks.
          </p>
        </div>

        <button className="back_btn">
          <FiArrowLeft className="back_btn_arrow" /> Go back
        </button>
      </article>

      <article className="related_articles">
        <h2>Related articles</h2>
        <div className="related_articles_content">
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
      </article>
    </section>
  );
}
