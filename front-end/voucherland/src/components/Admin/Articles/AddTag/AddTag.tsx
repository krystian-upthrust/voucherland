import React, { useState } from "react";
import AddTagForm from "./AddTagForm";

interface AddTagProps {
  handleCancelPressed: () => void;
  handleAddPressed: () => void;
}

export default function AddTag({
  handleCancelPressed,
  handleAddPressed,
}: AddTagProps) {
  return (
    <section className="add_tag_popup" data-testid="addtag">
      <div className="tag_form">
        <h3 data-testid="addtag-title">Add tag</h3>
        <AddTagForm
          handleAddPressed={handleAddPressed}
          handleCancelPressed={handleCancelPressed}
        />
      </div>
    </section>
  );
}
