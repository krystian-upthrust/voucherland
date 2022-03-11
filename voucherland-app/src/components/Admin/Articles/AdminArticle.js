import React, { useState } from "react";
import { FaLockOpen, FaLock } from "react-icons/fa";
import Checkbox from "../Checkbox";
import Tag from "./Tag";

export default function AdminArticle({ article }) {
  const [checked, setChecked] = useState(false);

  const ToggleCheckbox = (checked_value) => {
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
        <img src={article.image} alt="article-pic" />
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
