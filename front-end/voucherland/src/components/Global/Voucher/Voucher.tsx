import React, {useContext} from "react";
import {FiArrowRight, FiClock} from "react-icons/fi";
import {UserContext} from "../../../utils/context/UserContext";
import {useNavigate} from "react-router-dom";

import {IVoucher} from "../../../utils/types";
import {PercentageDiscountType} from "./DiscountTypes/PercentageDiscountType";
import {AdditionDiscountType} from "./DiscountTypes/AdditionDiscountType";
import {MobileLoginPopUp} from "./MobilePopUp/MobileLoginPopUp";
import {ROUTE_VOUCHERS_DETAIL} from "../../../utils/routes";
import {Discount} from "./DiscountTypes/Discount";


interface VoucherProps {
    voucher: IVoucher;
}

export default function Voucher({voucher}: VoucherProps): JSX.Element {
     const navigate = useNavigate();
    const user = useContext(UserContext);

    return (
        <article className="product">

            <Discount
                discount_type={voucher?.discount_type}
                discount={voucher?.discount}
            />

            <div className="product_header">
                <div className="logo">
                    <img src={`/resources/images/store/${voucher.store_image}`} alt="logo"/>
                </div>
                <p className="product_header_title">{voucher.name}</p>
            </div>

            <div className="product_image">
                <img src={`/resources/images/products/${voucher.product_image}`} alt="product-pic"/>
            </div>

            <p className="product_description">{voucher.description}</p>

            <div className="product_countdown">
                <p>
                    <FiClock className="product_countdown_clock"/> {voucher.expiry}
                </p>
            </div>

            <button
                className="product_voucher"
                onClick={() => navigate(ROUTE_VOUCHERS_DETAIL.replace(":id", String(voucher.id)))}
            >
                Claim voucher <FiArrowRight className="product_voucher_arrow"/>
            </button>

            {/* when not logged in && mobile only  */}
            {(!user?.loggedIn && window.innerHeight !> 1024) && (
                <MobileLoginPopUp />
            )}
        </article>
    );
}
