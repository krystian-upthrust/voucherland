import React, { useState } from "react";
import { IAdmin } from "../../../utils/types";
import Checkbox from "../Checkbox";

interface AdminProps {
  enableDelete: () => void;
  handleSelectedAdmin: (admin: IAdmin, checked_value: boolean) => void;
  admin: IAdmin;
}

export default function Admin({ enableDelete, handleSelectedAdmin, admin } : AdminProps) {
  const [checked, setChecked] = useState<boolean>(false);

  const ToggleCheckbox = (checked_value: boolean) => {
    setChecked(checked_value);
    handleSelectedAdmin(admin, checked_value);
    enableDelete();
  };

  return (
    <section className={`admin_item ${checked && "checked_voucher"}`}>
      <Checkbox toggleBox={ToggleCheckbox} />
      <p>{admin.email}</p>
    </section>
  );
}
