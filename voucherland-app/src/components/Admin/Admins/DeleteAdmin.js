import React from "react";

export default function DeleteAdmin({ deleteAmount, cancelPressed, deletePressed}) {
  return (
    <section className="delete_admin">
      <div className="delete_popup">
        <h3>Delete admin</h3>
        <p>
          You are about to delete <strong>{deleteAmount} admin</strong>. This
          action is irreversible!
        </p>
        <div className="buttons">
            <button className="cancel" onClick={cancelPressed}>cancel</button>
            <button className="delete_btn" onClick={deletePressed}>delete</button>
        </div>
      </div>
    </section>
  );
}
