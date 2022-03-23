import React from "react";

export default function TrustedBy() {
    
  return (
    <div className="trusted_by">
      <h3>Trusted by</h3>
      <div className="trusted_companies">
        <img
          className="company"
          src="/resources/images/colruyt-logo.png"
          alt="Colruyt"
        />
        <img
          className="company"
          src="/resources/images/delhaize-logo.png"
          alt="Delhaize"
        />
      </div>
    </div>
  );
}
