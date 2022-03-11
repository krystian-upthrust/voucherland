import React from "react";
import Socials from "../../components/Footer/Socials";
import { FiMail, FiPhone } from "react-icons/fi";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function ContactPage() {
  return (
    <section className="contact">
      <Header />

      <div className="contact_header">
        <h2>
          Cooperation is <span>key</span>
        </h2>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>

      <div className="contact_information_form_content">
        <div className="contact_information">
          <div className="contact_information_content">
            <h3>Contact inforamation</h3>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form
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

        <form className="contact_form">
          <h3>Or fill in the from</h3>
          <div className="contect_form_name">
            <label htmlFor="label">name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Jane Doe"
            />
          </div>

          <div className="contact_form_email">
            <label htmlFor="email">email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="jane.doe@upthrust.eu"
            />
          </div>

          <div className="contact_form_phone">
            <label htmlFor="phone">phone</label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="0498 12 23 34"
            />
          </div>

          <div className="contact_form_subject">
            <label htmlFor="subject">subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Your sujbect here"
            />
          </div>

          <div className="contact_form_message">
            <label htmlFor="message">message</label>
            <textarea
              name="message"
              id="message"
              placeholder="Your message here"
            />
          </div>
        </form>
      </div>

      <div className="contact_office">
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

      <Footer />
    </section>
  );
}
