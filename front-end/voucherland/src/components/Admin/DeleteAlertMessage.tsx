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
    <section className="delete_popup" data-testid="deletealertmessage">
      <div className="delete_content">
        <h4 data-testid="deletealertmessage-title">{deleteTitle}</h4>

        <div className="message">
          You are about to delete <strong>{deleteAmount}</strong>. This action
          is irreversible.
        </div>

        <div className="buttons">
          <button
            className="cancel"
            data-testid="deletealertmessage-cancel-btn"
            onClick={cancelPressed}
          >
            cancel
          </button>
          <button
            className="detele_btn"
            data-testid="deletealertmessage-delete-btn"
            onClick={deletePressed}
          >
            delete
          </button>
        </div>
      </div>
    </section>
  );
}
