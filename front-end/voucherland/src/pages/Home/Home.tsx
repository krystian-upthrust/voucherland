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

export default function Home() {
  const [vouchersData, setVouchersData] = useState<IVoucher[]>([]);
  const [articlesData, setArticleData] = useState<IArticle[]>([]);

  // It will get the vouchers from the data.json found in public folder
  // after it will sort the data and search for the public vouchers
  // and place only 3 vouchers in the state
  useEffect(() => {
    axios.get("/data.json").then((response) => {
      let result: IVoucher[] = [];
      response.data.vouchers.forEach((voucher: IVoucher) => {
        if (voucher.status === "public") {
          result.push(voucher);
        }
      });
      setVouchersData([result[0], result[1], result[2]]);
    });

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
