import React, { useEffect, useState } from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import Banner from "../../components/Home/Banner";
import Collaboration from "../../components/Home/Collaboration";
import RecentArticles from "../../components/Home/RecentArticles";
import Statistics from "../../components/Home/Statistics/Statistics";
import TopDeals from "../../components/Home/TopDeals";
import DealAdvantages from "../../components/Home/DealAdvantages/DealAdvantages";
import axios from "axios";
import { IArticle, IVoucher } from "../../utils/types";
import {BasicUrl} from "../../utils/axios/Axios";
import {RequestRoutes} from "../../utils/axios/RequestRoutes";

export default function Home() {
  const [vouchersData, setVouchersData] = useState<IVoucher[]>([]);
  const [articlesData, setArticleData] = useState<IArticle[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    BasicUrl
        .get(RequestRoutes.GetVouchersByPublicStatus)
        .then( response => {
          setVouchersData([
              response.data.public_vouchers[0],
              response.data.public_vouchers[1],
              response.data.public_vouchers[3]
          ]);
        });
  }, []);

  // useEffect(() => {
  //   BasicUrl
  //       .get(RequestRoutes.GetAllArticles)
  //       .then( response => {
  //         setVouchersData(response.data.public_vouchers);
  //       });
  // }, []);


  useEffect(() => {
    axios.get("/data.json").then((response) => {
      let result: IArticle[] = [];
      response.data.articles.forEach((article: IArticle) => {
        if (article.status === "public") {
          result.push(article);
        }
      });
      setArticleData([result[0], result[1], result[2], result[3]]);
    });
  }, []);

  return (
    <section className="home" data-testid="home">
      <Header />
      <Banner />
      {vouchersData.length !== 0 && <TopDeals vouchers={vouchersData} />}
      <DealAdvantages />
      <Statistics />
      <Collaboration />
      {articlesData.length !== 0 && <RecentArticles articles={articlesData} />}
      <Footer />
    </section>
  );
}
