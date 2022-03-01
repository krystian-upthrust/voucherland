import React from "react";

export default function StatisticsItem({ title, number }) {
  return (
    <article className="statistics_item">
      <p className="statistics_item_title">{title}</p>
      <p className="statistics_item_number">{number}</p>
    </article>
  );
}
