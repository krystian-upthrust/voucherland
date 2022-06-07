import React, { useState } from "react";
import AddTagForm from "./AddTagForm";

interface AddTagProps {
  handleCancelPressed: (value: boolean) => void;
}

export default function AddTag({
  handleCancelPressed,
}: AddTagProps) {


  return (
    <section className="add_tag_popup" data-testid="addtag">
      <div className="tag_form">
        <h3 data-testid="addtag-title">Add tag</h3>
        <AddTagForm
          handleCancelPressed={handleCancelPressed}
        />
      </div>
    </section>
  );
}
