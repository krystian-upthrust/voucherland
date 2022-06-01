import React, {useEffect, useState} from "react";
import {IArticle} from "../../utils/types";
import Article from "../Global/Article";
import {BasicUrl} from "../../utils/axios/Axios";
import {RequestRoutes} from "../../utils/axios/RequestRoutes";
import {AxiosResponse} from "axios";

interface RelatedArticlesProps {
    // related_articles?: IArticle[];
    tag_id: string;
}

export function RelatedArticles({tag_id}: RelatedArticlesProps): JSX.Element {
    const [loading, setLoading] = useState(true);
    const [relatedArticles, setRelatedArticles] = useState<IArticle[]>([]);


    useEffect(() => {
        setLoading(true);

        if (tag_id) {
            BasicUrl
                .get(RequestRoutes.GetRelatedArticles.replace(":tag", tag_id))
                .then((response: AxiosResponse<any>) => {
                    setRelatedArticles(response.data.related_articles);
                })
        }

        setLoading(false);
    }, []);

    return (
        <article className="related_articles">
            <h2 className="related_articles_title">Related articles</h2>
            {
                !loading &&
                <div className="related_articles_content">
                    {
                        relatedArticles.map((article: IArticle) => {
                            return <Article article={article} key={article.id}/>
                        })
                    }
                </div>
            }
        </article>
    )
}
