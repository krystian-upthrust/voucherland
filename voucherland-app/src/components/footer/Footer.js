import React from "react";
import Contact from "./Contact";
import Sitemap from "./Sitemap";
import Socials from "./Socials";
import TrustedBy from "./TrustedBy";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer_first">
        <div className="footer_header">
          <h3 className="footer_title">voucherland</h3>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking.
          </p>
        </div>

        <Socials />
        <TrustedBy />
        <Contact />
        
        {/* mobile only */}
        <Sitemap />
      </div>

      <div className="footer_second">
        <div className="line" />

        <div className="privacy">
          <p>&copy;2022 Voucherland</p>
          <p>Privacy policy</p>
        </div>
      </div>
    </footer>
  );
}
