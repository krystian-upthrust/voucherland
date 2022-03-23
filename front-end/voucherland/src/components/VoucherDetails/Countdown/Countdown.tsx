import React from "react";

import CountdownElement from "./CountdownElement";

export default function Countdown() {
  return (
    <div className="countdown">
      <CountdownElement count_number={"04"} count_name={"days"} />
      <CountdownElement count_number={"08"} count_name={"hours"} />
      <CountdownElement count_number={"30"} count_name={"min"} />
      <CountdownElement count_number={"30"} count_name={"sec"} />
    </div>
  );
}
