import React from "react";
import { FiMail, FiPhone } from "react-icons/fi";

import Socials from "../Footer/Socials";

export default function ContactInformation() {
  return (
    <div className="contact_information" data-testid="contact-information">
      <div className="contact_information_content">
        <h3>Contact inforamation</h3>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form
        </p>
        <div className="contact_information_contacts">
          <div className="contact_phone">
            <FiPhone /> +32 456 78 67 45
          </div>
          <div className="contact_email">
            <FiMail /> info@voucherland.be
          </div>
        </div>
        <Socials />
      </div>
    </div>
  );
}
