import React, {useEffect, useState} from 'react';

import Header from '../../components/Header/Header';
import Countdown from '../../components/VoucherDetails/Countdown/Countdown';

import {BsBookmark, BsBookmarkFill} from "react-icons/bs";
import {useParams} from "react-router-dom";
import {AuthApi} from "../../utils/axios/Axios";
import {RequestRoutes} from "../../utils/axios/RequestRoutes";
import {LocalStorageService} from "../../utils/LocalStorageService";
import {IVoucher} from "../../utils/types";
import Footer from "../../components/Footer/Footer";
import {Discount} from "../../components/Global/Voucher/DiscountTypes/Discount";

interface Params extends Record<string, string> {
    id: string;
}

export default function VoucherDetailPage() {
    const {id} = useParams<Params>();

    const [loading, setLoading] = useState<boolean>(true);
    const [voucher, setVoucher] = useState<IVoucher>();

    const [saved, setSaved] = useState<boolean>(true);

    useEffect(() => {
        setLoading(true);

        if (id && LocalStorageService.getAccessToken()) {
            AuthApi
                .get(RequestRoutes.GetSingleVoucher.replace(":id", id))
                .then(response => {
                    setVoucher(response.data.voucher);
                });
        }

        if(voucher) setLoading(false);
    }, [voucher]);

    // search if the current user has the current voucher saved
    // useeffect + usecontext (make a get request in api)

    return (
        <section className="voucher_detail_page">
            <Header/>
            {
                !loading && (
                    <>
                        <article className="voucher_details">
                            <div className="voucher_content">
                                <div className="voucher_content_header">
                                    <div className="voucher_store_logo">
                                        <img src={`/resources/images/store/${voucher?.store_image}`} alt="store-logo"/>
                                    </div>
                                    <h2 className="product_name">{voucher?.name}</h2>

                                    <Discount
                                        discount_type={voucher?.discount_type!}
                                        discount={voucher?.discount!}
                                    />
                                </div>

                                <div className="product_image_mobile">
                                    <img src={`/resources/images/products/${voucher?.product_image!}`} alt="product-pic"/>
                                </div>

                                <div className="product_description">
                                    <p>
                                        {voucher?.description!}
                                    </p>
                                </div>
                                <div className="voucher_downloads">
                                    <p>{voucher?.downloads!} downloads</p>
                                </div>

                                {!saved ? (
                                    <button className="save_voucher unsaved_btn" onClick={() => setSaved(true)}>
                                        Save this voucher <BsBookmark className="save_icon"/>
                                    </button>
                                ) : (
                                    <button className="save_voucher saved_btn" onClick={() => setSaved(false)}>
                                        Already saved <BsBookmarkFill className="save_icon"/>
                                    </button>
                                )}
                            </div>

                            <div className="product_image_desktop">
                                <img src={`/resources/images/products/${voucher!.product_image}`} alt="product-pic"/>
                            </div>
                        </article>

                        <article className="voucher_countdown">
                            <h2 className="voucher_countdown_title">
                                Action <span>expired</span> in
                            </h2>
                            <Countdown expiry={voucher?.expiry!}/>
                        </article>
                    </>
                )
            }

            <article className="related_vouchers">
                <div className="related_vouchers_header">
                    <h2>More Colruyt deals</h2>
                    <button className="back_to_voucher_btn desktop">
                        Back to all vouchers
                    </button>
                </div>
                <div className="related_vouchers_items">
                    {/* related vouchers */}
                </div>

                {/* back to all vouchers  */}
                <button className="back_to_voucher_btn mobile">
                    Back to all vouchers
                </button>
            </article>
            <Footer/>
        </section>
    )
}
