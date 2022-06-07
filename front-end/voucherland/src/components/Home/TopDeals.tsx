import React, {useContext, useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import {FiArrowRight} from "react-icons/fi";

import {ROUTE_LOGIN, ROUTE_VOUCHERS} from "../../utils/routes";
import {IVoucher} from "../../utils/types";
import Voucher from "../Global/Voucher/Voucher";
import {UserContext} from "../../utils/context/UserContext";
import {BasicUrl} from "../../utils/axios/Axios";
import {RequestRoutes} from "../../utils/axios/RequestRoutes";


export default function TopDeals(): JSX.Element {
    const navigate = useNavigate();

    const user = useContext(UserContext);

    const [loading, setLoading] = useState<boolean>();
    const [vouchers, setVouchers] = useState<IVoucher[]>([]);

    useEffect(() => {
        setLoading(true);

        BasicUrl
            .get(RequestRoutes.GetAllPublicVouchers)
            .then(response => {
                setVouchers([
                    response.data.public_vouchers[0],
                    response.data.public_vouchers[1],
                    response.data.public_vouchers[3]
                ]);
            });

        setLoading(false);
    }, []);


    return (
        <section className="top_deals" data-testid="home-topdeals" id="myRef">
            <div className="top_deals_header">
                <p className="header_title">Top deals this week</p>
                <button
                    className="view_vouchers_btn desktop"
                    data-testid="topdeals-vouchers-btn"
                    onClick={() => navigate(ROUTE_VOUCHERS)}
                >
                    View all vouchers <FiArrowRight className="view_vouchers_btn_arrow"/>
                </button>
            </div>

            {
                !loading &&
                <div className="products">
                    {
                        vouchers.map((voucher: IVoucher) => (
                            <Voucher voucher={voucher} key={voucher.id}/>
                        ))
                    }
                </div>
            }

            {/* when user not logged in && desktop only */}
            {!user?.loggedIn && (
                <div className="login_popup login_popup_desktop" data-testid="topdeals-login-popup">
                    <div className="login_popup_content">
                        <p>Want to claim the voucher?</p>
                        <button className="login_btn" onClick={() => navigate(ROUTE_LOGIN)}>
                            Login
                        </button>
                    </div>
                </div>
            )}

            <button
                className="view_vouchers_btn mobile"
                onClick={() => navigate(ROUTE_VOUCHERS)}
            >
                View all vouchers <FiArrowRight className="view_vouchers_btn_arrow"/>
            </button>
        </section>
    );
}
