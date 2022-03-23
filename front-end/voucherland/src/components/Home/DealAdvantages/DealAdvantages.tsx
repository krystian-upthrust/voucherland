import React from "react";
import DealAdvantage from "./DealAdvantage";

export default function DealAdvantages() {
  let deal_advantage_description = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.";

  return (
    <section className="deal_content deal_advantages">
      <h3 className="deal_advantages_header">Why get your deals in advance?</h3>

      <div className="deal deal_advantages_container">
        <img
          className="deal_advantages_image"
          src="./resources/images/full-banner-img.webp"
          alt="full-banner-pic"
        />

        <div className="deal_items deal_advantages_content">
          <DealAdvantage
            advantage_number={"01"}
            advantage_title={"Save money"}
            advantage_description={deal_advantage_description}
          />
          <DealAdvantage
            advantage_number={"02"}
            advantage_title={"Think of them"}
            advantage_description={deal_advantage_description}
          />
          <DealAdvantage
            advantage_number={"03"}
            advantage_title={"Save time"}
            advantage_description={deal_advantage_description}
          />
        </div>
      </div>
    </section>
  );
}
