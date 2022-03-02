import React from "react";
import PageHeader from "../PageHeader";
import { FaLockOpen, FaLock, FaDownload } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

export default function AdminArticles() {
  return (
    <section className="admin_articles">
      <article className="articles_header">
        <PageHeader
          page_title={"Articles"}
          create_btn_name={"Create article"}
        />

        {/* searchbar */} 

        <div className="admin_sub_menu">
          <ul>
            <li className={`menu_item ${"public"}`}>
              <FaLockOpen /> public
            </li>
            <li className={`menu_item ${"private"}`}>
              <FaLock /> private
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
}
