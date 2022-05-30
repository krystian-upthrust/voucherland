import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";

import Header from "../../components/Header/Header";

import {FiArrowLeft} from "react-icons/fi";
import {ROUTE_ARTICLES} from "../../utils/routes";
import {IArticle} from "../../utils/types";
import {BasicUrl} from "../../utils/axios/Axios";
import {RequestRoutes} from "../../utils/axios/RequestRoutes";
import Footer from "../../components/Footer/Footer";

interface ParamsTypes extends Record<string, string> {
    id: string;
}

export default function ArticleDetailPage() {
    const {id} = useParams<ParamsTypes>();
    const navigate = useNavigate();

    const [article, setArticle] = useState<IArticle>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        if (id) {
            BasicUrl
                .get(RequestRoutes.GetSingleArticle.replace(":id", id))
                .then(response => {
                    console.log(response.data)
                    setArticle(response.data.article);
                });
        }

        setLoading(false);
    }, []);

    return (
        <section className="article_details">
            <Header/>

            {!loading && (
                <article className="article_details_content">

                    <h2>{article!.title}</h2>
                    <div className="article_banner">
                        <img src={`/resources/images/${article!.article_image}`} alt="article-pic"/>
                    </div>

                    <div className="article_text_content">
                        <p className="article_main_text">{article!.content}</p>
                        <p className="article_main_text">{article!.content}</p>

                        <h3 className="article_intertitle">{article!.sub_title}</h3>

                        <p className="article_additional_text">{article!.sub_content}</p>
                        <p className="article_additional_text">{article!.sub_content}</p>
                    </div>

                    <button className="back_btn" onClick={() => navigate(ROUTE_ARTICLES)}>
                        <FiArrowLeft className="back_btn_arrow"/> Go back
                    </button>

                </article>
            )}

            {/* components with props */}
            <article className="related_articles">
                <h2>Related articles</h2>
                <div className="related_articles_content">

                </div>
            </article>
            <Footer/>
        </section>
    );
}
