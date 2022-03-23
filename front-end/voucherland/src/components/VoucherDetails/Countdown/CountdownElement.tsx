import React from "react";

interface CountdownElementProps {
  count_number: string;
  count_name: string;
}

export default function CountdownElement({
  count_number,
  count_name,
} : CountdownElementProps ) {
  return (
    <div className="countdown_element">
      <div className="count_number">{count_number}</div>
      <p className="count_name">{count_name}</p>
    </div>
  );
}
