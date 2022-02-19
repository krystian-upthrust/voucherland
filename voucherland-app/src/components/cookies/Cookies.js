import React from "react";

function Cookies() {
  return (
    <section className="cookies">
      <div class="cookies_header">
        <div class="cookies_header_title">
          <h3>Cookies</h3>
        </div>
        <div class="cookies_header_image">
          <img
            src="https://freepikpsd.com/file/2019/10/cookie-cartoon-png-4-Transparent-Images.png"
            alt="Cookies Clipart Cartoon Cute - Transparent Background Cookie Clipart@nicepng.com"
          />
        </div>
      </div>
      <div class="cookies_text">
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of the page.
        </p>
      </div>
      <div class="cookies_buttons">
        <button className="cookies_buttons_ok">Ok</button>
        <button className="cookies_buttons_policy">Private Policy</button>
      </div>
    </section>
  );
}

export default Cookies;
