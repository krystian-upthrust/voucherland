import React, {useEffect, useState} from "react";
import { FaClock } from "react-icons/fa";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Collaboration from "../../components/Home/Collaboration";
import VouchersBanner from "../../components/Vouchers/VouchersBanner";
import {IVoucher} from "../../utils/types";
import {BasicUrl} from "../../utils/axios/Axios";
import {RequestRoutes} from "../../utils/axios/RequestRoutes";
import {filter} from "cypress/types/minimatch";
import Voucher from "../../components/Global/Voucher";

export default function VouchersPage() {
    const [state, setState] = useState<IVoucher[][]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setLoading(true);

        BasicUrl
            .get(RequestRoutes.GetVouchersByPublicStatus)
            .then( response => {

                let vouchers = response.data.public_vouchers;
                let filtered = [];

                    while (vouchers.length){
                        let sortOutOnDate = vouchers[0].expiry;
                        let newArray : IVoucher[] = [];

                        let voucherCollection = [...vouchers];

                        voucherCollection.forEach((voucher:IVoucher) => {
                            if (voucher.expiry === sortOutOnDate){
                                newArray.push(voucher);
                                vouchers.splice(vouchers.indexOf(voucher, 0), 1);
                            }
                        });

                        filtered.push(newArray);
                    }

                setState(filtered);
                console.log(filtered)
            });
        setLoading(false);
    }, []);

    // function filterData(vouchers : IVoucher[]): IVoucher[][]{
    //     let filtered = [];
    //
    //     while (vouchers.length){
    //         let sortOutOnDate = vouchers[0].expiry;
    //         let newArray : IVoucher[] = [];
    //
    //         let voucherCollection = [...vouchers];
    //
    //         voucherCollection.forEach((voucher:IVoucher) => {
    //             if (voucher.expiry === sortOutOnDate){
    //                 newArray.push(voucher);
    //                 vouchers.splice(vouchers.indexOf(voucher, 0), 1);
    //             }
    //         });
    //
    //         filtered.push(newArray);
    //     }
    //
    //     console.log(filtered);
    //     return filtered;
    // }


    return (
    <section className="vouchers" data-testid="voucherspage">
      <Header />
      <VouchersBanner />

        {
            !loading &&
            state.map( voucherCollection => {

                return (
                    <div className="vouchers_lastchance">
                        <h3 className="lastchance">
                            <FaClock /> {voucherCollection[0].expiry} - Be quick
                        </h3>
                        <div className="vouchers_content">
                            {
                                voucherCollection.map( voucher => {
                                    return (
                                        <Voucher voucher={voucher} key={voucher.id} />
                                    )
                                })
                            }
                        </div>
                    </div>

                )
            })
        }


      <div className="vouchers_secondToLast">
        <h3>
          <FaClock /> 25/02/2022
        </h3>
        <div className="vouchers_content">
          {/* <Voucher
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
          /> */}
        </div>
      </div>

      <Collaboration />

      <div className="vouchers_thirdToLast">
        <h3>
          <FaClock /> 26/02/2022
        </h3>
        <div className="vouchers_content">
          {/* <Voucher
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
          /> */}
        </div>
      </div>

      <Footer />
    </section>
  );
}
