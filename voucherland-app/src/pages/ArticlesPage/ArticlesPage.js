import React from "react";
import Article from "../../components/Articles/Article";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

export default function ArticlesPage() {
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

      <article className="collaborations">
        <h3>Collaborations</h3>
        <div className="collaborations_content">
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

      <article className="media">
        <h3>Media</h3>
        <div className="media_content">
          <Article
            article_tag={"media"}
            article_title={"New collaboration with the cola group"}
            article_image={"./resources/images/bottle-capsule.png"}
            article_read_time={"7 min"}
          />
          <Article
            article_tag={"media"}
            article_title={"New collaboration with the cola group"}
            article_image={"./resources/images/bottle-capsule.png"}
            article_read_time={"7 min"}
          />
          <Article
            article_tag={"media"}
            article_title={"New collaboration with the cola group"}
            article_image={"./resources/images/bottle-capsule.png"}
            article_read_time={"7 min"}
          />
        </div>
      </article>
      
      <Footer />
    </section>
  );
}
