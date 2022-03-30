import React from "react";

interface DeleteAlertMessageProps {
  deleteTitle: string;
  deleteAmount: string;
  cancelPressed: () => void;
  deletePressed: () => void;
}

export default function DeleteAlertMessage({
  deleteTitle,
  deleteAmount,
  cancelPressed,
  deletePressed,
}: DeleteAlertMessageProps) {
  
  return (
    <section className="delete_popup" data-testid="deletealertmessage" >
      <div className="delete_content">
        <h4>{deleteTitle}</h4>

        <div className="message">
          You are about to delete <strong>{deleteAmount}</strong>. This action
          is irreversible.
        </div>

        <div className="buttons">
          <button className="cancel" onClick={cancelPressed}>
            Cancel
          </button>
          <button className="detele_btn" onClick={deletePressed}>
            Delete
          </button>
        </div>
      </div>
    </section>
  );
}
