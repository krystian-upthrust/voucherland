import React from "react";
import { Link } from "react-router-dom";
import { ROUTE_CONTACT } from "../../utils/routes";

export default function Collaboration() {
  return (
    <section className="collaboration" data-testid="collaboration">
      <div className="collaboration_image_container">
        <img
          className="collaboration_image_mobile"
          src="./resources/images/collaboration-mobile.png"
          alt="collaboration"
        />

        <img
          className="collaboration_image_desktop"
          src="./resources/images/collaboration-desktop.png"
          alt="collaboration"
        />
      </div>

      <div className="collaboration_content">
        <p className="tag">collaborations</p>
        <h2 className="title">
          Contact us to give your clients the best deals possible.
        </h2>
        <p className="description">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum.
        </p>
        <button
          className="contact_btn"
          onClick={() => <Link to={ROUTE_CONTACT} />}
        >
          Contact us
        </button>
      </div>
    </section>
  );
}
