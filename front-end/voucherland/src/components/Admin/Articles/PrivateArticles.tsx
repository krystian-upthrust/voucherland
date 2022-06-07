import React, {useEffect, useState} from "react";
import { IArticle } from "../../../utils/types";
import Collapsable from "../Collapsable";
import AdminArticle from "./AdminArticle";
import {LocalStorageService} from "../../../utils/LocalStorageService";
import {AuthApi} from "../../../utils/axios/Axios";
import {RequestRoutes} from "../../../utils/axios/RequestRoutes";
import {AxiosResponse} from "axios";
import {Capitalize, SortArticlesByTag} from "../../../utils/AdminUtils";



export default function PrivateArticles() {
  const [loading, setLoading] = useState<boolean>(true);
  const [privateArticles, setPrivateArticles] = useState<IArticle[][]>([]);

  useEffect(() => {
    setLoading(true);
      if (LocalStorageService.getAccessToken()) {
        AuthApi
            .get(RequestRoutes.GetPrivateArticles)
            .then((response: AxiosResponse) => {
              setPrivateArticles(SortArticlesByTag(response.data.private_articles))
            });
      }

      setLoading(false);
  }, []);


  return (
    <section className="private_articles">
      <h3>Private aricles</h3>

      {
        !loading &&
          <div className="private_articles_content">
            {
              privateArticles.map((articles: IArticle[], index: number) => {
                let tag: string = Capitalize(articles[0].tags[0].title);

                let content = articles.map( (article: IArticle, index: number) => {
                  return <AdminArticle article={article} key={index} />
                })

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
