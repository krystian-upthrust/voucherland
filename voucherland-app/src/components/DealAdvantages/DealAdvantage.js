import React from "react";

function DealAdvantage({
  advantage_number,
  advantage_title,
  advantage_description,
}) {
  return (
    <article class="advantage_item">

      <div class="advantage_item_header">
        <div class="advantage_item_header_number"> {advantage_number} </div>
        <p class="advantage_item_header_title"> {advantage_title} </p>
      </div>

      <div class="advantage_item_description">{advantage_description}</div>
      
    </article>
  );
}

export default DealAdvantage;
