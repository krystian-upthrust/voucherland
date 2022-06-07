import React, {useEffect, useState} from "react";
import {AxiosResponse} from "axios";
import { IArticle } from "../../../utils/types";
import Collapsable from "../Collapsable";
import AdminArticle from "./AdminArticle";
import {BasicUrl} from "../../../utils/axios/Axios";
import {RequestRoutes} from "../../../utils/axios/RequestRoutes";
import {Capitalize, SortArticlesByTag} from "../../../utils/AdminUtils";


export default function PublicArticles(): JSX.Element {
  const [loading, setLoading] = useState<boolean>(true);
  const [publicArticles, setPublicArticles] = useState<IArticle[][]>([]);

  useEffect(() => {
    setLoading(true);

    BasicUrl
        .get(RequestRoutes.GetAllPublicArticles)
        .then((response: AxiosResponse) => {
          setPublicArticles(SortArticlesByTag(response.data.public_articles));
        });

    setLoading(false);
  }, []);


  return (
    <section className="public_articles">
      <h3>Public articles</h3>

      {
        !loading &&
          <div className="public_articles_content">
            {
              publicArticles.map( (articles: IArticle[], index: number) => {

                let tag: string = Capitalize( articles[0].tags[0].title);

                let content = articles.map( (article: IArticle, index: number) => {
                  return <AdminArticle article={article} key={index} />
                });

                  return (
                      <Collapsable
                          id={(index+1)}
                          title={tag}
                          content={content}
                          layout={"articles_layout"}
                          key={index}
                      />
                  )
              })
            }
          </div>
      }
    </section>
  );
}
