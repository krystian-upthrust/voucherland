import React, { useState } from "react";

interface CheckboxProps {
  toggleBox : (value: boolean) => void
}

export default function Checkbox({ toggleBox } : CheckboxProps) {
  const [checked, setChecked] = useState<boolean>(false);

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
