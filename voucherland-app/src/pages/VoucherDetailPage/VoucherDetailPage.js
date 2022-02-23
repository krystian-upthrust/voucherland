import React, { useState } from "react";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import CountdownElement from "../../components/Countdown/CountdownElement";
import Header from "../../components/header/Header";
import Voucher from "../../components/voucher/Voucher";

export default function VoucherDetailPage({
  store_image,
  product_name,
  product_image,
  product_discount,
  vouchers_downloads,
}) {
  const [saved, setSaved] = useState(false);

  let product_description =
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.";
  let product_pic =
    "https://www.pngall.com/wp-content/uploads/2016/04/Cucumber-PNG-HD.png";
  let store_logo =
    "https://upload.wikimedia.org/wikipedia/commons/c/cb/Colruyt_logo.svg";

  return (
    <section className="voucher_page">
      <Header />
      <article className="voucher_details">
        <div className="voucher_content">
          <div className="voucher_content_header">
            <div className="voucher_store_logo">
              <img src={store_image} alt="store-logo" />
            </div>
            <h2 className="product_name">{product_name}</h2>

            <div className="product_discount">
              <p>{product_discount}</p>
            </div>
          </div>

          <div className="product_image_mobile">
            <img src={product_image} alt="product-pic" />
          </div>

          <div className="product_description">
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum.
            </p>
          </div>
          <div className="voucher_downloads">
            <p>{vouchers_downloads}</p>
          </div>

          {!saved ? (
            <button className="save_voucher unsaved_btn" onClick={()=> setSaved(true)} >
              Save this voucher <BsBookmark className="save_icon" />
            </button>
          ) : (
            <button className="save_voucher saved_btn" onClick={()=> setSaved(false)} >
              Already saved <BsBookmarkFill className="save_icon" />
            </button>
          )}
        </div>

        <div className="product_image_desktop">
          <img src={product_image} alt="product-pic" />
        </div>
      </article>

      <article className="voucher_countdown">
        <h2 className="voucher_countdown_title">
          Action <span>expired</span> in
        </h2>
        <div className="countdown">
          <CountdownElement count_number={"04"} count_name={"days"} />
          <CountdownElement count_number={"08"} count_name={"hours"} />
          <CountdownElement count_number={"30"} count_name={"min"} />
          <CountdownElement count_number={"30"} count_name={"sec"} />
        </div>
      </article>

      <artcile className="related_vouchers">
        <div className="related_vouchers_header">
          <h2>More Colruyt deals</h2>
          <button className="back_to_voucher_btn desktop">
            Back to all vouchers
          </button>
        </div>
        <div className="related_vouchers_items">
          <Voucher
            store_logo={store_logo}
            product_discount={"-30%"}
            product_name={"Komkommers"}
            product_image={product_pic}
            product_description={product_description}
            product_countdown={"2 days, 17 hours"}
          />
          <Voucher
            store_logo={store_logo}
            product_discount={"-30%"}
            product_name={"Komkommers"}
            product_image={product_pic}
            product_description={product_description}
            product_countdown={"2 days, 17 hours"}
          />
          <Voucher
            store_logo={store_logo}
            product_discount={"-30%"}
            product_name={"Komkommers"}
            product_image={product_pic}
            product_description={product_description}
            product_countdown={"2 days, 17 hours"}
          />
        </div>

        {/* back to all vouchers  */}
        <button className="back_to_voucher_btn mobile">
          Back to all vouchers
        </button>
      </artcile>
    </section>
  );
}
