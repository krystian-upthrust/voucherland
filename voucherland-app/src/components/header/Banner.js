import React from 'react'

function Banner() {
  return (
    <section className="banner">
        <div className="banner_content">
          <h2 className="banner_quote">
            Get your voucher now and
            <span> be ahead of the crowd.</span>
          </h2>
          <p className="banner_description">
            There are many variations of passages of Lorem Ipsum available, but
            the majority. There are many variations of passages of Lorem Ipsum
            available, but the majority.
          </p>
          <button className="banner_register_btn">register now</button>
        </div>

        <div className="banner_image">
          <img src="/resources/images/banner-img.png" alt="banner-pic" />
        </div>
    </section>
  )
}

export default Banner;