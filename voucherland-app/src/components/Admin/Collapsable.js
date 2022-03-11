import React, { useState } from "react";

export default function Collapsable() {
  const [selected, setSelected] = useState(null);

  const toggle = (item) => {
    if (selected === item) return setSelected(null);
    setSelected(item);
  };

  return (
    <div className="collapsable">
      <div className="collapsable_title" onClick={() => toggle(1)}>
        <h7> Header </h7>
        <span>{selected == 1 ? "-" : "+"}</span>
      </div>
      <div className={`collapsable_content  ${selected == 1 && " show"}`}>
        <div className={`item  ${selected == 1 && " showItem"}`}>content1</div>
        <div className={`item  ${selected == 1 && " showItem"}`}>content2</div>
        <div className={`item  ${selected == 1 && " showItem"}`}>content3</div>
        <div className={`item  ${selected == 1 && " showItem"}`}>content4</div>
      </div>
    </div>
  );
}
