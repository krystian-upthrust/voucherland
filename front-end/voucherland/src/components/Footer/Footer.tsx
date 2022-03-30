import React from "react";
import Contact from "./Contact";
import FootFooter from "./FootFooter";
import FootHeader from "./FootHeader";
import SiteMap from "./SiteMap";
import Socials from "./Socials";
import TrustedBy from "./TrustedBy";

export default function Footer() {
  return (
    <footer className="footer" data-testid="footer">
      <div className="footer_first">
        <FootHeader />
        <Socials />
        <TrustedBy />
        <Contact />

        {/* mobile only */}
        <SiteMap />
      </div>
      <FootFooter />
    </footer>
  );
}
