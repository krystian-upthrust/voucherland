import React from "react";
import Collaboration from "../../components/Collaboration/Collaboration";
import Header from "../../components/Header/Header";
import { FiSearch } from "react-icons/fi";
import { FaClock } from "react-icons/fa";
import Voucher from "../../components/Voucher/Voucher";

export default function VouchersPage() {
  let product_description =
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.";
  let product_image =
    "https://www.pngall.com/wp-content/uploads/2016/04/Cucumber-PNG-HD.png";
  let store_logo =
    "https://upload.wikimedia.org/wikipedia/commons/c/cb/Colruyt_logo.svg";

  return (
    <section className="vouchers">
      <Header />
      <div className="vouchers_banner">
        <h2>Daily new deals</h2>
        <form className="vouchers_banner_searchbar">
          <input type="text" placeholder="Search for shop/brand" />
          <button>
             search <FiSearch />
          </button>
        </form>
      </div>

      <div className="vouchers_lastchance">
        <h3 className="lastchance">
          <FaClock /> 24/02/2022 - Be quick
        </h3>
        <div className="vouchers_content">
          <Voucher
            store_logo={store_logo}
            product_discount={"-30%"}
            product_name={"Komkommers"}
            product_image={product_image}
            product_description={product_description}
            product_countdown={"17 hours"}
          />
          <Voucher
            store_logo={store_logo}
            product_discount={"-30%"}
            product_name={"Komkommers"}
            product_image={product_image}
            product_description={product_description}
            product_countdown={"17 hours"}
          />
          <Voucher
            store_logo={store_logo}
            product_discount={"-30%"}
            product_name={"Komkommers"}
            product_image={product_image}
            product_description={product_description}
            product_countdown={"17 hours"}
          />
        </div>
      </div>

      <div className="vouchers_secondToLast">
        <h3>
          <FaClock /> 25/02/2022
        </h3>
        <div className="vouchers_content">
          <Voucher
            store_logo={store_logo}
            product_discount={"-30%"}
            product_name={"Komkommers"}
            product_image={product_image}
            product_description={product_description}
            product_countdown={"1 days, 17 hours"}
          />
          <Voucher
            store_logo={store_logo}
            product_discount={"-30%"}
            product_name={"Komkommers"}
            product_image={product_image}
            product_description={product_description}
            product_countdown={"1 days, 17 hours"}
          />
          <Voucher
            store_logo={store_logo}
            product_discount={"-30%"}
            product_name={"Komkommers"}
            product_image={product_image}
            product_description={product_description}
            product_countdown={"1 days, 17 hours"}
          />
        </div>
      </div>

      <Collaboration />

      <div className="vouchers_thirdToLast">
        <h3>
          <FaClock /> 26/02/2022
        </h3>
        <div className="vouchers_content">
          <Voucher
            store_logo={store_logo}
            product_discount={"-30%"}
            product_name={"Komkommers"}
            product_image={product_image}
            product_description={product_description}
            product_countdown={"2 days, 17 hours"}
          />
          <Voucher
            store_logo={store_logo}
            product_discount={"-30%"}
            product_name={"Komkommers"}
            product_image={product_image}
            product_description={product_description}
            product_countdown={"2 days, 17 hours"}
          />
          <Voucher
            store_logo={store_logo}
            product_discount={"-30%"}
            product_name={"Komkommers"}
            product_image={product_image}
            product_description={product_description}
            product_countdown={"2 days, 17 hours"}
          />
        </div>
      </div>
    </section>
  );
}
