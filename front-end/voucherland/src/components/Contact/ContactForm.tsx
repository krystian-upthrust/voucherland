import React, { useEffect, useState } from "react";

export default function ContactForm() {
  const [disable, setDisable] = useState<boolean>(true);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    if (
      name === "" ||
      email === "" ||
      phone === "" ||
      subject === "" ||
      message === ""
    ) {
      setDisable(true);
    } else setDisable(false);
  }, [name, email, phone, subject, message]);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
  };

  return (
    <form
      className="contact_form"
      onSubmit={handleSubmit}
      data-testid="contact-form"
    >
      <h3>Or fill in the from</h3>
      <div className="contect_form_name">
        <label htmlFor="label">name</label>
        <input
          type="text"
          id="name"
          name="name"
          data-testid="contact-form-name"
          placeholder="Jane Doe"
          onChange={(event) => setName(event.target.value)}
        />
      </div>

      <div className="contact_form_email">
        <label htmlFor="email">email</label>
        <input
          type="email"
          id="email"
          name="email"
          data-testid="contact-form-email"
          placeholder="jane.doe@upthrust.eu"
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>

      <div className="contact_form_phone">
        <label htmlFor="phone">phone</label>
        <input
          type="text"
          id="phone"
          name="phone"
          data-testid="contact-form-phone"
          placeholder="0498 12 23 34"
          onChange={(event) => setPhone(event.target.value)}
        />
      </div>

      <div className="contact_form_subject">
        <label htmlFor="subject">subject</label>
        <input
          type="text"
          id="subject"
          name="subject"
          data-testid="contact-form-subject"
          placeholder="Your subject here"
          onChange={(event) => setSubject(event.target.value)}
        />
      </div>

      <div className="contact_form_message">
        <label htmlFor="message">message</label>
        <textarea
          name="message"
          id="message"
          data-testid="contact-form-message"
          placeholder="Your message here"
          onChange={(event) => setMessage(event.target.value)}
        />
      </div>

      <div className="btn_container">
        <button
          type="submit"
          className="submit"
          data-testid="contact-form-submit-btn"
          disabled={disable}
        >
          submit
        </button>
      </div>
    </form>
  );
}
