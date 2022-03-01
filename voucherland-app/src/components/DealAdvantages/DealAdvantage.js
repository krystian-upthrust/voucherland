import React from "react";

function DealAdvantage({
  advantage_number,
  advantage_title,
  advantage_description,
}) {
  return (
    <article className="advantage_item">

      <div className="advantage_item_header">
        <div className="advantage_item_header_number"> {advantage_number} </div>
        <p className="advantage_item_header_title"> {advantage_title} </p>
      </div>

      <div className="advantage_item_description">{advantage_description}</div>
      
    </article>
  );
}

export default DealAdvantage;
