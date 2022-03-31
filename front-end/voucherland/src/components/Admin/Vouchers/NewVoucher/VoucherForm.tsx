import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegImage, FaLockOpen, FaLock, FaAngleLeft } from "react-icons/fa";
import { ROUTE_ADMIN_VOUCHERS } from "../../../../utils/routes";

export default function VoucherForm() {
  const navigate = useNavigate();

  const [state, setState] = useState<string>("public");
  const [activities, setActivities] = useState<boolean>(false);

  const UnfoldSelect = () => {
    let selectBox = document.getElementById("selcet_box")!;

    if (!selectBox.classList.contains("unfolded")) {
      selectBox.classList.add("unfolded");
    } else {
      selectBox.classList.remove("unfolded");
    }
  };

  return (
    <form className="voucher_form" data-testid="voucherform">
      <h2>
        <FaAngleLeft
          className="header_icon"
          onClick={() => navigate(ROUTE_ADMIN_VOUCHERS)}
        />
        New Voucher
        <span className={`state_icon ${state + "_state"}`}>
          {state === "public" ? <FaLockOpen /> : <FaLock />}
        </span>
      </h2>

      <div className="grid">
        <div className="brand" data-testid="voucherform-brand">
          <label htmlFor="brand">brand logo path</label>
          <div className="upload_brand">
            <p>
              <FaRegImage /> Upload image here
            </p>
            <input type="file" id="brand" name="brand" accept="image/*" />
          </div>
        </div>

        <div className="preview" data-testid="voucherform-preview">
          <label htmlFor="preview">preview</label>
          <div className="preview_image">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Colruyt_logo.svg"
              alt="preview"
            />
          </div>
        </div>

        <div className="state" data-testid="voucherform-state">
          <label htmlFor="state">state</label>
          <div id="selcet_box" className="select_box" onClick={UnfoldSelect}>
            <div className={`select ${state}`}>
              {state === "public" ? <FaLockOpen /> : <FaLock />}
              {state}
            </div>
            <div className="options">
              <p className="option public" onClick={() => setState("public")}>
                <FaLockOpen /> public
              </p>
              <p className="option private" onClick={() => setState("private")}>
                <FaLock /> private
              </p>
              <p className="option expired" onClick={() => setState("expired")}>
                <FaLock /> expired
              </p>
            </div>
          </div>
        </div>

        <div className="product_name" data-testid="voucherform-productname">
          <label htmlFor="product_name">product name</label>
          <input
            type="text"
            id="product_name"
            name="product_name"
            placeholder="Product name"
            data-testid="voucherform-name"
          />
        </div>

        <div className="expiry" data-testid="voucherform-expiry">
          <label htmlFor="expiry">expiry date:time</label>
          <input
            type="text"
            id="expiry"
            name="expiry"
            placeholder="Expiry date"
            data-testid="voucherform-expiry-input"
          />
        </div>

        <div className="product_image" data-testid="voucherform-productimage">
          <label htmlFor="product_image">product image</label>
          <input type="text" id="product_image" name="product_image" />
        </div>

        <div className="discount_sort" data-testid="voucherform-discount">
          <label htmlFor="discount">sort of discount</label>
          <input
            type="text"
            id="discount"
            name="discount"
            placeholder="-"
            data-testid="voucherform-discount-input"
          />
        </div>

        <div className="precentage" data-testid="voucherform-precentage">
          <label htmlFor="precentage">precentage</label>
          <input
            type="text"
            id="precentage"
            name="precentage"
            placeholder="-"
            data-testid="voucherform-precentage-input"
          />
        </div>

        <div className="pieces" data-testid="voucherform-pieces">
          <label htmlFor="pieces">pieces from</label>
          <input
            type="text"
            id="pieces"
            name="pieces"
            placeholder="-"
            data-testid="voucherform-pieces-input"
          />
        </div>

        <div className="code" data-testid="voucherform-code">
          <label htmlFor="code">code</label>
          <input
            type="text"
            id="code"
            name="code"
            placeholder="-"
            data-testid="voucherform-code-input"
          />
        </div>

        <div className="description" data-testid="voucherform-description">
          <label htmlFor="description">description</label>
          <textarea name="description" id="description" />
        </div>
      </div>

      <div className="buttons">
        <button className="delete" data-testid="voucherform-delete-btn">
          delete
        </button>
        <button className="save_btn" data-testid="voucherform-save-btn">
          Save changes
        </button>
      </div>

      <div className="activity" data-testid="voucherform-activity">
        <p>Activity</p>
        <div className="activities_content">
          {activities ? "show" : "No activities yet."}
        </div>
      </div>
    </form>
  );
}
