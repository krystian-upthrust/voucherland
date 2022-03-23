import React, { useState } from "react";

interface CollapsableProps {
  id? : number;
  title: string;
  content: JSX.Element[] ;
  layout: string;
}

export default function Collapsable({ id = 1, title, content, layout } : CollapsableProps) {
  const [selected, setSelected] = useState<number | null>(1);

  const toggle = (item : number) => {
    console.log("collapse clicked")
    if (selected === item) return setSelected(null);
    setSelected(item);
  };

  return (
    <div className={`collapsable ${selected === id ? "collapsableOpen" : "collapsableClose"}`}>
      <div className="collapsable_title" onClick={() => toggle(id)}>
        <h4>{title}</h4>
        <div className="colapse_minus">
          <div className="line" />
          <div className={`line ${ selected === id ? "openLine" : "closeLine" }`} />
        </div>
      </div>
      <div className={`collapsable_content ${selected === id && "show"} ${layout} `} >
        {content}
      </div>
    </div>
  );
}
