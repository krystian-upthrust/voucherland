import React, { useEffect, useState } from "react";
import { FaLockOpen, FaLock } from "react-icons/fa";
import PublicVouchersTab from "../../components/Admin/Vouchers/PublicVouchersTab";
import PublicVoucher from "../../components/Admin/Vouchers/PublicVoucher";
import PrivateVoucher from "../../components/Admin/Vouchers/PrivateVoucher";
import PrivateVouchersTab from "../../components/Admin/Vouchers/PrivateVouchersTab";
import ExpiredVouchersTab from "../../components/Admin/Vouchers/ExpiredVouchersTab";
import ExpiredVoucher from "../../components/Admin/Vouchers/ExpiredVoucher";
import PageHeader from "../../components/Admin/PageHeader";
import Searchbar from "../../components/Admin/Searchbar";
import DeleteAlertMessage from "../../components/Admin/DeleteAlertMessage";
import AdminNav from "../../components/Admin/AdminNav";
import { useNavigate } from "react-router-dom";
import { ROUTE_ADMIN_ADD_VOUCHER } from "../../routes";

export default function AdminVouchers() {
  const navigate = useNavigate();
  const publicV = [
    <PublicVoucher />,
    <PublicVoucher />,
    <PublicVoucher />,
    <PublicVoucher />,
    <PublicVoucher />,
  ];
  const privateV = [<PrivateVoucher />, <PrivateVoucher />, <PrivateVoucher />];
  const expiredV = [<ExpiredVoucher />, <ExpiredVoucher />, <ExpiredVoucher />];

  const [voucherMenu, setVoucherMenu] = useState({
    public: true,
    private: false,
    expired: false,
  });
  const [searched, setSearched] = useState(false);
  const [deleteAlert, setDeleteAlert] = useState(false);

  useEffect(() => {
    ToggleAdminVoucherTab();
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
    <section className="admin admin_vouches_nav">
      <AdminNav />

      <div className="admin_content">
        <section className="admin_vouchers">
          <article className="admin_vouchers_header">
            <PageHeader
              pageTitle={"Vouchers"}
              createTitle={"Create voucher"}
              handleCreatePressed={() => navigate(ROUTE_ADMIN_ADD_VOUCHER)}
              handleDeletePressed={() => setDeleteAlert(true)}
            />

            {/* Split into reusable component! */}
            <div className="admin_statistics_content">
              <div className="admin_statistics">
                <p className="stat_name">#publicVouchersThisWeek</p>
                <p className="stat_count">123</p>
                <p className="stat_percentage stat_percent_positive">+20%</p>
              </div>
              <div className="admin_statistics">
                <p className="stat_name">#downloads24h</p>
                <p className="stat_count">21 123</p>
                <p className="stat_percentage stat_percent_positive">+20%</p>
              </div>
              <div className="admin_statistics">
                <p className="stat_name">#totalDownloads</p>
                <p className="stat_count">123 123</p>
                <p className="stat_percentage stat_percent_negitive">-20%</p>
              </div>
            </div>

            <Searchbar handleSearch={() => setSearched(true)} handleExit={() => setSearched(false)} />
          </article>

          {!searched && (
            <>
              <div className="admin_sub_menu">
                <ul>
                  <li
                    className={`menu_item ${voucherMenu.public && "public"}`}
                    onClick={TogglePublicTab}
                  >
                    <FaLockOpen /> public
                  </li>
                  <li
                    className={`menu_item ${voucherMenu.private && "private"}`}
                    onClick={TogglePrivateTab}
                  >
                    <FaLock /> private
                  </li>
                  <li
                    className={`menu_item ${voucherMenu.expired && "expired"}`}
                    onClick={ToggleExpiredTab}
                  >
                    <FaLock /> expired
                  </li>
                </ul>
              </div>

              {voucherMenu.public && (
                <div className="public_tab">
                  <h3>Public vouchers</h3>

                

                  <PublicVouchersTab
                    vouchers_date={"friday 18 march"}
                    pulbic_vouchers={publicV}
                  />
                  <PublicVouchersTab
                    vouchers_date={"saterday 19 march"}
                    pulbic_vouchers={publicV}
                  />
                  <PublicVouchersTab
                    vouchers_date={"monday 21 march"}
                    pulbic_vouchers={publicV}
                  />
                </div>
              )}

              {voucherMenu.private && (
                <div className="private_tab">
                  <h3>Private vouchers</h3>
                  <PrivateVouchersTab
                    vouchers_date={"friday 18 april"}
                    pulbic_vouchers={privateV}
                  />
                  <PrivateVouchersTab
                    vouchers_date={"saterday 19 april"}
                    pulbic_vouchers={privateV}
                  />
                  <PrivateVouchersTab
                    vouchers_date={"monday 21 april"}
                    pulbic_vouchers={privateV}
                  />
                </div>
              )}

              {voucherMenu.expired && (
                <div className="expired_tab">
                  <h3>Expired vouchers</h3>
                  <ExpiredVouchersTab
                    vouchers_date={"friday 18 january"}
                    pulbic_vouchers={expiredV}
                  />
                  <ExpiredVouchersTab
                    vouchers_date={"saterday 19 january"}
                    pulbic_vouchers={expiredV}
                  />
                  <ExpiredVouchersTab
                    vouchers_date={"monday 21 january"}
                    pulbic_vouchers={expiredV}
                  />
                </div>
              )}
            </>
          )}

          {searched && (
            <div className="search_result">
              <div className="search_result_header">
                <h3>4 results</h3>
                <button className="delete_btn">delete</button>
              </div>
              <div className="search_result_content">
                <PublicVoucher />
                <PublicVoucher />
                <PrivateVoucher />
                <ExpiredVoucher />
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

function ToggleAdminVoucherTab() {
  let tabs = document.getElementsByClassName("voucher_tab");
  let lines = document.getElementsByClassName("line");

  for (let index = 0; index < tabs.length; index++) {
    tabs[index].addEventListener("click", () => {
      console.log("event");
      if (lines[1].classList.contains("close_tab")) {
        lines[1].classList.remove("close_tab");
        lines[1].classList.add("open_tab");
      } else {
        lines[1].classList.remove("open_tab");
        lines[1].classList.add("close_tab");
      }
    });
  }
}
