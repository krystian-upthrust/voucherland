import React from "react";

export default function StatisticsItem({ title, number }) {
  return (
    <article class="statistics_item">
      <p class="statistics_item_title">{title}</p>
      <p class="statistics_item_number">{number}</p>
    </article>
  );
}
