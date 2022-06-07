import React, {useEffect, useState} from "react";
import {AuthApi} from "../../../utils/axios/Axios";
import {RequestRoutes} from "../../../utils/axios/RequestRoutes";
import {AxiosResponse} from "axios";
import {IVoucher} from "../../../utils/types";
import {SortVoucherByDate} from "../../../utils/AdminUtils";
import Collapsable from "../Collapsable";
import {SetFullDate} from "../../../utils/AdminUtils";
import {AdminVoucher} from "./VoucherOptions/AdminVoucher";

export default function PrivateVouchers(): JSX.Element {

    const [loading, setLoading] = useState<boolean>(true);
    const [privateVouchers, setPrivateVouchers] = useState<IVoucher[][]>([]);

    useEffect(() => {
        setLoading(true);

        AuthApi
            .get(RequestRoutes.GetAllPrivateVouchers)
            .then((response: AxiosResponse<any>) => {
                setPrivateVouchers(SortVoucherByDate(response.data.private_vouchers));
            });

        setLoading(false);
    }, []);

    return (
        <section className="private_vouchers">
            <h3>Private vouchers</h3>
            {
                !loading &&
                <div className="private_vouchers_content">
                    {
                        privateVouchers.map((vouchers: IVoucher[], index: number) => {
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
                            )
                        })
                    }
                </div>
            }
        </section>
    );
}
