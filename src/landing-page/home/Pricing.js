import React from "react";
function Pricing() {
  return (
    <div className="container mb-5" style={{ marginTop: "120px" }}>
      <div className="row">
        <div className="col">
          <h2 className="text-muted">Unbeatable pricing</h2>
          <div className="mt-5">
            <p className="fs-5 text-muted">
              We pioneered the concept of discount broking and price
              transparency in India. Flat fees and no hidden charges.
            </p>
          </div>
          <a href="/">
            See pricing{" "}
            <i class="fa-solid fa-arrow-right" style={{ fontSize: "12px" }}></i>
          </a>
        </div>
        <div className="col">
          <img
            src="/media/images/images/pricingEquity.svg"
            style={{ width: "30%" }}
            alt="ecosystem"
          />
          <img
            src="/media/images/images/pricingEquity.svg"
            style={{ width: "30%" }}
            alt="ecosystem"
          />
          <img
            src="/media/images/images/pricingEquity.svg"
            style={{ width: "30%" }}
            alt="ecosystem"
          />
        </div>
      </div>
    </div>
  );
}
export default Pricing;
