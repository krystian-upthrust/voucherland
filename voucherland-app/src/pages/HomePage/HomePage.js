import React from "react";
import Articles from "../../components/Articles/Articles";
import Banner from "../../components/Banner/Banner";
import Collaboration from "../../components/Collaboration/Collaboration";
import DealAdvantages from "../../components/DealAdvantages/DealAdvantages";
import Statistics from "../../components/Statistics/Statistics";
import TopDeals from "../../components/TopDeals/TopDeals";

export default function HomePage() {
  return (
    <section className="home">
      <Banner />
      <TopDeals />
      <DealAdvantages />
      <Statistics />
      <Collaboration />
      <Articles />
    </section>
  );
}
