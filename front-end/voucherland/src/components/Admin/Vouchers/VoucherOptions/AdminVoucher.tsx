import React, {useState} from "react";
import Checkbox from "../../Checkbox";
import {FaDownload, FaLockOpen} from "react-icons/fa";
import {FiClock} from "react-icons/fi";
import {IVoucher} from "../../../../utils/types";
import {LockIndicator} from "./LockIndicator";

interface AdminVoucherProps {
    voucher: IVoucher
}

export function AdminVoucher({voucher}: AdminVoucherProps) {

    const [checked, setChecked] = useState<boolean>(false);

    const ToggleCheckbox = (checked_value: boolean) => {
        setChecked(checked_value);
    };

    return (
        <section className={`public_voucher ${checked && "checked_voucher"}`}>
            <article className="voucher_info" >
                <Checkbox toggleBox={ToggleCheckbox}/>

                <p className="voucher_tag">{ voucher.tag }</p>
                <div className="voucher_store_image">
                    <img
                        src={`/resources/images/store/${voucher.store_image}`}
                        alt="Colruyt"
                    />
                </div>
                <p className="product_name">{ voucher.name }</p>
                <div className="voucher_discount">{ voucher.discount }</div>
                <div className="voucher_downloads">
                    <FaDownload/> { voucher.downloads }
                </div>
            </article>

            <article className="voucher_category">
                <LockIndicator status={voucher.status} />
                <div className="voucher_deadline">
                    <FiClock/> fr 18feb, 18h00
                </div>
            </article>
        </section>
    )
}