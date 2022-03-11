import React, { useState } from "react";

export default function Checkbox({ toggleBox }) {
  const [checked, setChecked] = useState(false);

  const ToggleCheckbox = () => {
    setChecked(!checked);
    toggleBox(!checked);
  };

  return (
    <div
      className={`checkbox ${checked && "checked"}`}
      onClick={ToggleCheckbox}
    >
      <div className="checked_line1" />
      <div className="checked_line2" />
    </div>
  );
}
