import React, { useState } from "react";
import { FaCamera, FaUserAlt } from "react-icons/fa";

interface AddAdminProps {
  cancelPressed : () => void
  addAdminPressed : () => void
}

export default function AddAdmin({ cancelPressed, addAdminPressed } : AddAdminProps) {
  const [uploaded, setUploaded] = useState<boolean>(false);

  return (
    <section className="add_admin">
      <form className="add_admin_form">
        <h3>Add admin</h3>

        <div className="email">
          <label htmlFor="email">email</label>
          <input type="email" id="email" name="email" placeholder="email" />
        </div>

        <div className="image_uploader">
          <div className="image">
            {uploaded ? (
              <img src="" alt="" />
            ) : (
              <FaUserAlt className="image_replacement" />
            )}
          </div>
          <div className="upload_btn">
            <label htmlFor="image">
              <FaCamera className="icon" /> upload photo
            </label>
            <input type="file" id="image" name="image" accept="image/*" />
          </div>
        </div>

        <div className="buttons">
          <button className="cancel" onClick={cancelPressed}>
            Cancel
          </button>
          <button className="add_btn" onClick={addAdminPressed}>
            Add admin
          </button>
        </div>
      </form>
    </section>
  );
}
