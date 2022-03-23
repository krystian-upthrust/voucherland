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
import { useNavigate } from "react-router-dom";
import { ROUTE_ADMIN_VOUCHERS } from "../../../utils/routes";
import AdminNav from "../AdminNav";

export default function NewVoucher() {
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
    <section className="admin admin_vouches_nav">
      <AdminNav />

      <div className="admin_content">
        <article className="new_voucher">
          <form className="voucher_form">
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
              <div className="brand">
                <label htmlFor="brand">brand logo path</label>
                <div className="upload_brand">
                  <p>
                    <FaRegImage /> Upload image here
                  </p>
                  <input type="file" id="brand" name="brand" accept="image/*" />
                </div>
              </div>

              <div className="preview">
                <label htmlFor="preview">preview</label>
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
                  <div className={`select ${state}`}>
                    {state === "public" ? <FaLockOpen /> : <FaLock />}
                    {state}
                  </div>
                  <div className="options">
                    <p
                      className="option public"
                      onClick={() => setState("public")}
                    >
                      <FaLockOpen /> public
                    </p>
                    <p
                      className="option private"
                      onClick={() => setState("private")}
                    >
                      <FaLock /> private
                    </p>
                    <p
                      className="option expired"
                      onClick={() => setState("expired")}
                    >
                      <FaLock /> expired
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
              <button className="delete">delete</button>
              <button className="save_btn">Save changes</button>
            </div>

            <div className="activity">
              <p>Activity</p>
              <div className="activities_content">
                {activities ? "show" : "No activities yet."}
              </div>
            </div>
          </form>

          {/* split into component <AsideSpecifications /> */}
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
