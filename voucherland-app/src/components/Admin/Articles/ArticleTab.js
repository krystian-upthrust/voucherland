import React from "react";
import { Article } from "./Article";

export default function ArticleTab({ tabTitle, tabContent }) {
  return (
    <section className="tab">
      <div className="tab_title">
        <h4>{tabTitle}</h4>
      </div>

      <div className="tab_content">
        {
          tabContent.map( article => <Article article={article} key={article.id}/>) 
        }  
      </div>
    </section>
  );
}
