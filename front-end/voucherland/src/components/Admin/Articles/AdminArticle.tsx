import React, { useState } from "react";

import { FaLockOpen, FaLock } from "react-icons/fa";
import { IArticle } from "../../../utils/types";

import Tag from "../../Global/Tag";
import Checkbox from "../Checkbox";


interface AdminArticleProps {
  article : IArticle
}

export default function AdminArticle({ article } : AdminArticleProps) {
  const [checked, setChecked] = useState<boolean>(false);

  const ToggleCheckbox = (checked_value : boolean) => {
    setChecked(checked_value);
  };

  return (
    <article className={`admin_article ${checked && "checked_article"}`}>
      <div className="admin_article_content">
        <div className="content_header">
          <Checkbox toggleBox={ToggleCheckbox} />
          <h3>{article.title}</h3>
        </div>

        <div className="description">{article.description}</div>

        <div className="tags">
          {article.tags.map((tag) => (
            <Tag tag={tag} key={tag.color} />
          ))}
        </div>
      </div>

      <div className="admin_article_image">
        <img src={article.article_image} alt="article-pic" />
      </div>

      <div
        className={`admin_article_state ${
          article.status === "public" ? "public_lock" : "private_lock"
        }`}
      >
        {article.status === "public" ? <FaLockOpen /> : <FaLock />}
      </div>
    </article>
  );
}
