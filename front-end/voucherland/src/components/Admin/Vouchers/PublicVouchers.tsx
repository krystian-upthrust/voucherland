import React, {useEffect, useState} from "react";

import Collapsable from "../Collapsable";
import {BasicUrl} from "../../../utils/axios/Axios";
import {RequestRoutes} from "../../../utils/axios/RequestRoutes";
import {AxiosResponse} from "axios";
import {IVoucher} from "../../../utils/types";
import {SetFullDate, SortVoucherByDate} from "../../../utils/AdminUtils";
import {AdminVoucher} from "./VoucherOptions/AdminVoucher";

export default function PublicVouchers(): JSX.Element {

    const [loading, setLoading] = useState<boolean>(true);
    const [publicVouchers, setPublicVouchers] = useState<IVoucher[][]>([]);

    useEffect(() => {
        setLoading(true);

        BasicUrl
            .get(RequestRoutes.GetAllPublicVouchers)
            .then((response: AxiosResponse<any>) => {
                setPublicVouchers(SortVoucherByDate(response.data.public_vouchers));
            });

        setLoading(false);
    }, []);

    return (
        <section className="public_vouchers">
            <h3>Public vouchers</h3>

            {
                !loading &&
                <div className="public_vouchers_content">
                    {
                        publicVouchers.map((vouchers: IVoucher[], index: number) => {
                            const date = SetFullDate(vouchers[0].expiry);

                            let content = vouchers.map((voucher: IVoucher, index: number) => {
                                return <AdminVoucher voucher={voucher} key={index}/>
                            });

                            return (
                                <Collapsable
                                    id={(index+1)}
                                    title={date}
                                    content={content}
                                    layout={"vouchers_layout"}
                                    key={index}
                                />
                            );
                        })
                    }
                </div>
            }
        </section>
    );
}
