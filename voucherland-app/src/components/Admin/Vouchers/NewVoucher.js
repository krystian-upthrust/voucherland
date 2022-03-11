import React, { useState } from "react";
import {
  FaRegImage,
  FaLockOpen,
  FaLock,
  FaBookmark,
  FaDownload,
  FaCalendarAlt,
  FaAngleLeft,
} from "react-icons/fa";
import AdminNav from "../AdminNav";

export default function NewVoucher() {
  const [state, setState] = useState("public");
  const [activities, setActivities] = useState(false);

  const UnfoldSelect = () => {
    let selectBox = document.getElementById("selcet_box");

    if (!selectBox.classList.contains("unfolded")) {
      
      selectBox.classList.add("unfolded");
    } else {
      selectBox.classList.remove("unfolded");
    }
  };

  return (
    <section className="admin admin_vouches_nav">
      <AdminNav />

      <div className="admin_content">
        <article className="new_voucher">
          <form className="voucher_form">
            <h2>
              <FaAngleLeft /> New Voucher
              <span
                className={`state_icon ${
                  state === "public" ? "public_state" : "private_state"
                }`}
              >
                {state === "public" ? <FaLockOpen /> : <FaLock />}
              </span>
            </h2>

            <div className="grid">
              <div className="brand">
                <label htmlFor="brand">brand logo path</label>
                <div className="upload_brand">
                  <p>
                    {" "}
                    <FaRegImage /> Upload image here
                  </p>
                  <input type="file" id="brand" name="brand" accept="image/*" />
                </div>
              </div>

              <div className="preview">
                <p htmlFor="preview">preview</p>
                <div className="preview_image">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Colruyt_logo.svg"
                    alt="preview"
                  />
                </div>
              </div>

              <div className="state">
                <label htmlFor="state">state</label>
                <div
                  id="selcet_box"
                  className="select_box"
                  onClick={UnfoldSelect}
                >
                  <div className="select">
                    <span className={`color_circle`} />
                    some test text
                  </div>
                  <div className="options">
                    <p className="option">
                      public 
                    </p>
                    <p className="option">
                      public 
                    </p>
                  </div>
                </div>
              </div>

              <div className="product_name">
                <label htmlFor="product_name">product name</label>
                <input
                  type="text"
                  id="product_name"
                  name="product_name"
                  placeholder="Product name"
                />
              </div>

              <div className="expiry">
                <label htmlFor="expiry">expiry date:time</label>
                <input
                  type="text"
                  id="expiry"
                  name="expiry"
                  placeholder="Expiry date"
                />
              </div>

              <div className="product_image">
                <label htmlFor="product_image">product image</label>
                <input type="text" id="product_image" name="product_image" />
              </div>

              <div className="discount_sort">
                <label htmlFor="discount">sort of discount</label>
                <input
                  type="text"
                  id="discount"
                  name="discount"
                  placeholder="-"
                />
              </div>

              <div className="precentage">
                <label htmlFor="precentage">precentage</label>
                <input
                  type="text"
                  id="precentage"
                  name="precentage"
                  placeholder="-"
                />
              </div>

              <div className="pieces">
                <label htmlFor="pieces">pieces from</label>
                <input type="text" id="pieces" name="pieces" placeholder="-" />
              </div>

              <div className="code">
                <label htmlFor="code">code</label>
                <input type="text" id="code" name="code" placeholder="-" />
              </div>

              <div className="description">
                <label htmlFor="description">description</label>
                <textarea name="description" id="description" />
              </div>
            </div>

            <div className="buttons">
              <buttun className="delete">delete</buttun>
              <button className="save_btn">Save changes</button>
            </div>

            <div className="activity">
              <p htmlFor="activity">Activity</p>
              <div className="activities_content">
                {activities ? "show" : "No activities yet."}
              </div>
            </div>
          </form>

          <aside className="voucher_specs">
            <div className="specs">
              <p>
                <FaBookmark /> 1234 saves
              </p>
              <p>
                <FaDownload /> 123 downloads
              </p>
              <p>
                <FaCalendarAlt /> Created on feb 15, 2022
              </p>
            </div>
            <div className="made_by">
              <h4>Made by</h4>
              <div className="name">
                <div className="circle" />
                <p>Jane Doe</p>
              </div>
            </div>
            <div className="barcode_container">
              <p>Barcode</p>
              <div className="barcode"></div>
            </div>
          </aside>
        </article>
      </div>
    </section>
  );
}
