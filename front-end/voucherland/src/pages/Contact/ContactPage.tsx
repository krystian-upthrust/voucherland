import React from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import ContactForm from "../../components/Contact/ContactForm";
import Office from "../../components/Contact/Office";
import ContactInformation from "../../components/Contact/ContactInformation";
import ContactHeader from "../../components/Contact/ContactHeader";

export default function ContactPage() {
  return (
    <section className="contact" data-testid="contactpage">
      <Header />

      <ContactHeader />

      <div className="contact_information_form_content">
        <ContactInformation />
        <ContactForm />
      </div>

      <Office />

      <Footer />
    </section>
  );
}
