import React, { useState } from "react";
import { FiCheckCircle, FiXCircle } from "react-icons/fi";

export default function Newletter() {
  const [signedNewsletter, setSignedNewsletter] = useState(false);

  return (
    <article className="newletter">
      <h3>Newletter</h3>

      <div className="newletter_content">
        {signedNewsletter ? (
          <div className="newletter_content_signed">
            <FiCheckCircle className="newletter_content_signed_icon" />
            <p className="signed">
              You are currently signed up for our newsletter
            </p>
          </div>
        ) : (
          <div className="newletter_content_unsigned">
            <FiXCircle className="newletter_content_unsigned_icon" />
            <p className="unsigned">
              You are currently not signed up for out newletter
            </p>
          </div>
        )}

        <form>
          <div className="email">
            <label htmlFor="email">email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="person@example.com"
            />
          </div>

          <div className="promotions">
            <label htmlFor="promotions">promotions</label>
            <p>
              Can we also send you emails for our best promostions and other
              news?
            </p>
            <fieldset className="promotions_content">
              <div>
                <input type="radio" id="yes" value="yes" />
                <label htmlFor="yes">yes</label>
              </div>
              <div>
                <input type="radio" id="no" value="no" />
                <label htmlFor="no">no</label>
              </div>
            </fieldset>
          </div>

          <button className="newletter_btn">Save changes</button>
        </form>
      </div>
    </article>
  );
}
