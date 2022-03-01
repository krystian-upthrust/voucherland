import React from "react";
import { useNavigate } from "react-router-dom";

function Banner() {
  const navigate = useNavigate();

  return (
    <section className="banner">
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
          <button
            className="banner_register_btn"
            onClick={() => { navigate("/register"); }}
          >
            Register now
          </button>
          <button
            className="banner_collaboration_btn"
            onClick={() => {navigate("/contact"); }}
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

export default Banner;
