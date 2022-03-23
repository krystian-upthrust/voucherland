import React from "react";
import StatisticsItem from "./StatisticsItem";

export default function Statistics() {
  return (
    <section className="statistics">
      <StatisticsItem title={"#vouchersUsed"} number={"22K"} />
      <StatisticsItem title={"#collaboration"} number={"1,3K"} />
      <StatisticsItem title={"#activeUsers"} number={"956"} />
    </section>
  );
}
