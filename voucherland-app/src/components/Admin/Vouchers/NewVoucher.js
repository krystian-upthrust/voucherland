import React from "react";
import { FaRegImage } from "react-icons/fa";

export default function NewVoucher() {
  return (
    <section className="new_voucher">
      <div className="voucher_form_container">
        <form className="voucher_form">
          <div className="brand">
            <label htmlFor="brand">brand</label>
            <input type="file" id="" name="" placeholder="" />
          </div>

          <div className="preview">
            <label htmlFor="preview">preview</label>
            <input type="text" id="" name="" placeholder="" />
          </div>

          <div className="state">
            <label htmlFor=""></label>
            <input type="text" id="" name="" placeholder="" />
          </div>

          <div className="product_name">
            <label htmlFor=""></label>
            <input type="text" id="" name="" placeholder="Product name" />
          </div>

          <div className="expiry">
            <label htmlFor=""></label>
            <input type="text" id="" name="" placeholder="Expiry date" />
          </div>

          <div className="product_image">
            <label htmlFor=""></label>
            <input type="text" id="product_image" name="product_image" />
          </div>

          <div className="discount_sort">
            <label htmlFor="discount">discount</label>
            <input type="text" id="discount" name="discount" placeholder="-" />
          </div>

          <div className="precentage">
            <label htmlFor="precentage">precentage</label>
            <input type="text" id="precentage" name="precentage" placeholder="-" />
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

          <div className="buttons">
            <buttun className="delete">delete</buttun>
            <button className="save_btn">Save changes</button>
          </div>

          <div className="activity">
              <label htmlFor="activity">activity</label>
              <textarea name="activity" id="activity" />
          </div>

        </form>
      </div>
      <aside className="voucher_specs">
        <div className="specs">
            <p>1234 saves</p>
            <p>123 downloads</p>
            <p>Creates on feb 15, 2022</p>
        </div>
        <div className="made_by">
            <div className="circle"/>
            <p>Jane Doe</p>
        </div>
        <div className="barcode_container">
            <p>barcode</p>
            <div className="barcode"></div>
        </div>
      </aside>
    </section>
  );
}
