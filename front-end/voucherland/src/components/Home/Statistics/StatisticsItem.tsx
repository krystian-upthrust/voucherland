import React from "react";

interface StatisticsItemProps {
  title: string;
  number: string;
}

export default function StatisticsItem({ title, number }: StatisticsItemProps) {
  return (
    <article className="statistics_item">
      <p className="statistics_item_title">{title}</p>
      <p className="statistics_item_number">{number}</p>
    </article>
  );
}
