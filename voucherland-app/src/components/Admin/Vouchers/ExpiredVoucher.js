import React from 'react';
import { FaLock, FaDownload } from "react-icons/fa";
import { FiClock } from "react-icons/fi";

export default function ExpiredVoucher() {
  return (
    <section className="expired_voucher">
        <article className="voucher_info">
          <div className="checkbox" />
          <p className="voucher_tag">ABC1</p>
          <div className="voucher_store_image">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Colruyt_logo.svg"
              alt="Colruyt"
            />
          </div>
          <p className="product_name">Komkommers</p>
          <div className="voucher_discount">-20%</div>
          <div className="voucher_downloads">
            <FaDownload /> 955
          </div>
        </article>

        <article className="voucher_category">
          <div className="voucher_lock expired_lock">
            <FaLock />
          </div>
          <div className="voucher_deadline">
            <FiClock /> fr 18feb, 18h00
          </div>
        </article>
    </section>
  )
}
