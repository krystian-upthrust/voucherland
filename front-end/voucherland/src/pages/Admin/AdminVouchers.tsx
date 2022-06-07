import React, {useContext, useEffect, useState} from "react";
import {FaLockOpen, FaLock} from "react-icons/fa";
import {useNavigate} from "react-router-dom";

import AdminNav from "../../components/Admin/AdminNav";
import DeleteAlertMessage from "../../components/Admin/DeleteAlertMessage";
import PageHeader from "../../components/Admin/PageHeader";
import Searchbar from "../../components/Admin/Searchbar";
import ExpiredVouchers from "../../components/Admin/Vouchers/ExpiredVouchers";
import PrivateVouchers from "../../components/Admin/Vouchers/PrivateVouchers";
import PublicVouchers from "../../components/Admin/Vouchers/PublicVouchers";
import {ROUTE_ADMIN_ADD_VOUCHER, ROUTE_HOME} from "../../utils/routes";
import {IAdminSubNav} from "../../utils/types";
import {AdminVouchersStatistics} from "../../components/Admin/Vouchers/VouchersStatistics/AdminVouchersStatistics";
import {UserContext} from "../../utils/context/UserContext";

export default function AdminVouchers(): JSX.Element {
    const navigate = useNavigate();
    const user = useContext(UserContext);

    const [voucherMenu, setVoucherMenu] = useState<IAdminSubNav>({
        public: true,
        private: false,
        expired: false,
    });
    const [searched, setSearched] = useState<boolean>(false);
    const [deleteAlert, setDeleteAlert] = useState<boolean>(false);

    useEffect(() => {
        if (user?.user?.is_admin) {
            navigate(ROUTE_HOME);
        }
    }, []);


    const TogglePublicTab = () => {
        setVoucherMenu({
            public: true,
            private: false,
            expired: false,
        });
    };
    const TogglePrivateTab = () => {
        setVoucherMenu({
            public: false,
            private: true,
            expired: false,
        });
    };
    const ToggleExpiredTab = () => {
        setVoucherMenu({
            public: false,
            private: false,
            expired: true,
        });
    };

    return (
        <section className="admin admin_vouches_nav" data-testid="adminvouchers">
            <AdminNav/>

            <div className="admin_content">
                <section className="admin_vouchers">
                    <article className="admin_vouchers_header">
                        <PageHeader
                            pageTitle={"Vouchers"}
                            createTitle={"Create voucher"}
                            handleCreatePressed={() => navigate(ROUTE_ADMIN_ADD_VOUCHER)}
                            handleDeletePressed={() => setDeleteAlert(true)}
                        />

                        <AdminVouchersStatistics/>

                        <Searchbar
                            handleSearch={() => setSearched(true)}
                            handleExit={() => setSearched(false)}
                        />
                    </article>

                    {!searched && (
                        <>
                            <div className="admin_sub_menu">
                                <ul>
                                    <li
                                        className={`menu_item ${voucherMenu.public && "public"}`}
                                        onClick={TogglePublicTab}
                                    >
                                        <FaLockOpen/> public
                                    </li>
                                    <li
                                        className={`menu_item ${voucherMenu.private && "private"}`}
                                        onClick={TogglePrivateTab}
                                    >
                                        <FaLock/> private
                                    </li>
                                    <li
                                        className={`menu_item ${voucherMenu.expired && "expired"}`}
                                        onClick={ToggleExpiredTab}
                                    >
                                        <FaLock/> expired
                                    </li>
                                </ul>
                            </div>

                            {voucherMenu.public && <PublicVouchers/>}
                            {voucherMenu.private && <PrivateVouchers/>}
                            {voucherMenu.expired && <ExpiredVouchers/>}
                        </>
                    )}

                    {/* split into complonent <SearchResult searchcontent /> */}
                    {searched && (
                        <div className="search_result">
                            <div className="search_result_header">
                                <h3>4 results</h3>
                                <button className="delete_btn">delete</button>
                            </div>
                            <div className="search_result_content">
                                {/*  search result  */}
                            </div>
                        </div>
                    )}

                    {deleteAlert && (
                        <DeleteAlertMessage
                            deleteTitle={"Delete vouchers"}
                            deleteAmount={`2 vouchers`}
                            cancelPressed={() => setDeleteAlert(true)}
                            deletePressed={() => {
                                console.log("deleted!");
                            }}
                        />
                    )}
                </section>
            </div>
        </section>
    );
}
