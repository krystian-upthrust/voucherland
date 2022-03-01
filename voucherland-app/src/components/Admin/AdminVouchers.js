import React, { useEffect } from "react";
import { FaLockOpen, FaLock, FaDownload } from "react-icons/fa";
import { FiSearch, FiDownload, FiClock } from "react-icons/fi";
import PublicVouchersTab from "./PublicVouchersTab";

export default function AdminVouchers() {

    useEffect(() => {
        ToggleAdminVoucherTab()
    }, []);

  return (
    <section className="admin_vouchers">
      <article className="admin_vouchers_header">
        <div className="header_title">
          <h2>Vouchers</h2>
          <div className="header_btns">
            <button className="create_btn">Create voucher</button>
            <button className="delete_btn">delete</button>
          </div>
        </div>

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

        <form className="searchbar">
          <FiSearch />
          <input type="search" placeholder="Search..." />
        </form>

        <div className="admin_sub_menu">
          <ul>
            <li className="menu_item public">
              <FaLockOpen /> public
            </li>
            <li className="menu_item private">
              <FaLock /> private
            </li>
            <li className="menu_item expired">
              <FaLock /> expired
            </li>
          </ul>
        </div>
      </article>

      <PublicVouchersTab />
    </section>
  );
}

function ToggleAdminVoucherTab() {
    console.log('hi')
    let tabs = document.getElementsByClassName("voucher_tab");
    let lines = document.getElementsByClassName("line");

    for (let index = 0; index < tabs.length; index++) {
        tabs[index].addEventListener('click', () => {
            console.log('event');
            if(lines[1].classList.contains('close_tab')) {
                lines[1].classList.remove('close_tab');
                lines[1].classList.add('open_tab');
            } else {
                lines[1].classList.remove('open_tab');
                lines[1].classList.add('close_tab');
            }
        })
    }
}