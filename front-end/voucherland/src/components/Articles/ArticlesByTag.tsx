import React from "react";
import {IArticle} from "../../utils/types";
import Article from "../Global/Article";

interface ArticlesByTagProps {
    title: string;
    articles: IArticle[];
    classNameComponent: string;
    classNameArticles: string;
}

export function ArticlesByTag({title, articles, classNameComponent, classNameArticles}: ArticlesByTagProps) {

    return (
        <article className={classNameComponent}>
            <h3>{title}</h3>
            <div className={classNameArticles}>
                {articles.map((article: IArticle) => (
                    <Article article={article} key={article.id}/>
                ))}
            </div>
        </article>
    )
}