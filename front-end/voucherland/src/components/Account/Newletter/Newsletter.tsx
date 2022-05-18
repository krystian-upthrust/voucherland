import React, { useState } from "react";
import { FiCheckCircle, FiXCircle } from "react-icons/fi";
import {Input} from "../../Global/Input";

export default function Newsletter() {
  const [signedNewsletter, setSignedNewsletter] = useState<boolean>(false);

  return (
    <article className="newsletter">
      <h3>Newsletter</h3>

      <div className="newsletter_content">
        {signedNewsletter ? (
          <div className="newsletter_content_signed">
            <FiCheckCircle className="newsletter_content_signed_icon" />
            <p className="signed">
              You are currently signed up for our newsletter
            </p>
          </div>
        ) : (
          <div className="newsletter_content_unsigned">
            <FiXCircle className="newsletter_content_unsigned_icon" />
            <p className="unsigned">
              You are currently not signed up for out newsletter
            </p>
          </div>
        )}

        <form>
          <div className="email">
            <label htmlFor="email">email</label>
            <Input
                type={"email"}
                placeholder={"email"}
                test_id={"newsletter-email-input"}
                error={false}
                onChange={()=>{}}
            />
          </div>

          <div className="promotions">
            <label htmlFor="promotions">promotions</label>
            <p>
              Can we also send you emails for our best promotions and other news?
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

          <button className="newsletter_btn">Save changes</button>
        </form>
      </div>
    </article>
  );
}
