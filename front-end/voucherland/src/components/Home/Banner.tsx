import React, {useContext} from "react";
import { useNavigate } from "react-router-dom";
import { ROUTE_CONTACT, ROUTE_REGISTER } from "../../utils/routes";
import {UserContext} from "../../utils/context/UserContext";

export default function Banner() {
  const navigate = useNavigate();

  const userContext = useContext(UserContext);

  return (
    <section className="banner" data-testid="home-banner">
      <div className="banner_content">
        <h2 className="banner_quote">
          Get your voucher now and <span> be ahead of the crowd.</span>
        </h2>
        <p className="banner_description">
          There are many variations of passages of Lorem Ipsum available, but
          the majority. There are many variations of passages of Lorem Ipsum
          available, but the majority.
        </p>
        <div className="banner_buttons">
          {
            !userContext?.loggedIn &&
              <button
                  className="banner_register_btn"
                  onClick={() => navigate(ROUTE_REGISTER)}
              >
                Register now
              </button>
          }
          <button
            className="banner_collaboration_btn"
            onClick={() => navigate(ROUTE_CONTACT)}
          >
            Collaborate
          </button>
        </div>
      </div>

      <div className="banner_image_container">
        {/* banner image mobile */}
        <img
          className="banner_image mobile_image"
          src="./resources/images/full-banner-img.webp"
          alt=""
        />
        {/* banner image desktop */}
        <img
          className="banner_image desktop_image"
          src="./resources/images/banner-img.png"
          alt=""
        />
      </div>

      <div className="scroller">
        <div className="scroller_ball" />
      </div>
    </section>
  );
}
