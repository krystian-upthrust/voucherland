import React from "react";

export default function Office() {
  return (
    <div className="contact_office" data-testid="contact-office" >
      <div className="contact_office_content">
        <h3>Our office</h3>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form
        </p>
        <div className="contact_office_content_address">
          <h4>Antwerp</h4>
          <p>Emiel banningstraat 211</p>
          <p>2000 Antwerp, Belgium</p>
        </div>
      </div>
      <div className="contact_office_map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1004.4503511802313!2d4.3882723379333815!3d51.20547789399069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3f71c4ef04a35%3A0x7bebf9b95005c864!2sUpthrust!5e0!3m2!1sen!2sbe!4v1645694208596!5m2!1sen!2sbe"
          loading="lazy"
          title="google-maps"
        ></iframe>
      </div>
    </div>
  );
}
