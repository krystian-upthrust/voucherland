import React, {useEffect, useState} from "react";
import {AxiosResponse} from "axios";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import {IArticle, ITag} from "../../utils/types";
import {BasicUrl} from "../../utils/axios/Axios";
import {RequestRoutes} from "../../utils/axios/RequestRoutes";
import {ArticlesByTag} from "../../components/Articles/ArticlesByTag";

export default function ArticlesPage() {
    const [recentArticles, setRecentArticles] = useState<IArticle[]>([]);
    const [mediaArticles, setMediaArticles] = useState<IArticle[]>([]);
    const [collaborationArticles, setCollaborationArticles] = useState<IArticle[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setLoading(true);

        BasicUrl
            .get(RequestRoutes.GetAllPublicArticles)
            .then((response: AxiosResponse<any, any> ) => {

                let recent: IArticle[] = [],
                    collab : IArticle[] = [],
                    media : IArticle[] = [] ;

                response.data.public_articles.forEach((article: IArticle) => {
                    if (article.tags.length === 0) return;

                    if (article.tags[0].title === "recent articles") {
                        recent.push(article);
                    }
                    if (article.tags[0].title === "collaboration") {
                        collab.push(article);
                    }
                    if (article.tags[0].title === "media") {
                        media.push(article);
                    }
                });

                setRecentArticles(recent);
                setCollaborationArticles(collab);
                setMediaArticles(media);
            })

        setLoading(false);
    }, []);

    return (
        <section className="articles">
            <Header/>

            <h2>
                <span>Explore</span> Voucherland
            </h2>

            {
                !loading &&
                <>
                    <ArticlesByTag
                        title={"Recent articles"}
                        articles={recentArticles}
                        classNameComponent={"recent_articles"}
                        classNameArticles={"recent_articles_content"}
                    />

                    <ArticlesByTag
                        title={"Collaborations"}
                        articles={collaborationArticles}
                        classNameComponent={"collaborations"}
                        classNameArticles={"collaborations_content"}
                    />

                    <ArticlesByTag
                        title={"Media"}
                        articles={mediaArticles}
                        classNameComponent={"media"}
                        classNameArticles={"media_content"}
                    />
                </>
            }

            <Footer/>
        </section>
    );
}
