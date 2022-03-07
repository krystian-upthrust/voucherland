import React from 'react'

export default function NewArticle() {
  return (
    <section className="new_article">
        <div className="article_form">
            <div className="form_header"></div>
            <form>
                <div className="title"></div>
                <div className="state"></div>
                <div className="tags"></div>
                <div className="image"></div>
                <div className="article_content"></div>
                <div className="subtitle"></div>
                <div className="article_subcontent"></div>
                <div className="buttons"></div>
            </form>
        </div>
        <aside className="article_specs">
            <div className="created_by"></div>
            <div className="made_by"></div>
        </aside>
    </section>
  )
}
