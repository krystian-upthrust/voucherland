import React, {useEffect, useState} from "react";
import {IVoucher} from "../../../utils/types";
import {AuthApi} from "../../../utils/axios/Axios";
import {RequestRoutes} from "../../../utils/axios/RequestRoutes";
import {AxiosResponse} from "axios";
import {SetFullDate, SortVoucherByDate} from "../../../utils/AdminUtils";
import Collapsable from "../Collapsable";
import {AdminVoucher} from "./VoucherOptions/AdminVoucher";


export default function ExpiredVouchers(): JSX.Element {

    const [loading, setLoading] = useState<boolean>(true);
    const [expiredVouchers, setExpiredVouchers] = useState<IVoucher[][]>([]);

    useEffect(() => {
        setLoading(true);

        AuthApi
            .get(RequestRoutes.GetAllExpiredVouchers)
            .then((response: AxiosResponse<any>) => {
                setExpiredVouchers(SortVoucherByDate(response.data.expired_vouchers));
            });

        setLoading(false);
    }, []);

    return (
        <section className="expired_vouchers">
            <h3>Expired vouchers</h3>
            {
                !loading &&
                <div className="expired_vouchers_content">
                    {
                        expiredVouchers.map((vouchers: IVoucher[], index: number) => {
                            const date = SetFullDate(vouchers[0].expiry);

                            let content = vouchers.map((voucher: IVoucher, index: number) => {
                                return <AdminVoucher voucher={voucher} key={index}/>
                            });

                            return (
                                <Collapsable
                                    id={(index + 1)}
                                    title={date}
                                    content={content}
                                    layout={"vouchers_layout"}
                                    key={index}
                                />
                            )
                        })
                    }
                </div>
            }
        </section>
    );
}
