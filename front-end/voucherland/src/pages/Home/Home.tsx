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

export default function Home(): JSX.Element {

  return (
    <section className="home" data-testid="home">
      <Header />
      <Banner />
      <TopDeals />
      <DealAdvantages />
      <Statistics />
      <Collaboration />
      <RecentArticles />
      <Footer />
    </section>
  );
}
