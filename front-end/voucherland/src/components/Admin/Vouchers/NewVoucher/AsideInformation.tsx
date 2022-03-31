import React from "react";
import { FaBookmark, FaDownload, FaCalendarAlt } from "react-icons/fa";

export default function AsideInformation() {
  return (
    <aside className="voucher_specs" data-testid="asideinformation" >
      <div className="specs">
        <p>
          <FaBookmark /> 1234 saves
        </p>
        <p>
          <FaDownload /> 123 downloads
        </p>
        <p>
          <FaCalendarAlt /> Created on feb 15, 2022
        </p>
      </div>
      <div className="made_by">
        <h4>Made by</h4>
        <div className="name">
          <div className="circle" />
          <p>Jane Doe</p>
        </div>
      </div>
      <div className="barcode_container">
        <p>Barcode</p>
        <div className="barcode"></div>
      </div>
    </aside>
  );
}
