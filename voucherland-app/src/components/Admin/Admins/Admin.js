import React, { useState } from "react";
import Checkbox from "../Articles/Checkbox";

export default function Admin({enableDelete, handleSelectedAdmin, admin}) { 
  const [checked, setChecked] = useState(false);

  const ToggleCheckbox = (checked_value) => {
    setChecked(checked_value);
    handleSelectedAdmin(admin, checked_value);
    enableDelete();
  };
  
  return (
    <section className={`admin_item ${checked && 'checked_voucher' }`}>
      <Checkbox toggleBox={ToggleCheckbox} />
      <p>{admin.email}</p>
    </section>
  );
}
