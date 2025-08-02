import React from "react";
function Education() {
  return (
    <div className="container mb-5" style={{ marginTop: "120px" }}>
      <div className="row">
        <div className="col">
          <img
            src="/media/images/images/education.svg"
            style={{ width: "70%" }}
            alt="ecosystem"
          />
        </div>
        <div className="col">
          <h2 className="text-muted">Free and open market education</h2>
          <div className="mt-3">
            <p className="fs-5 text-muted">
              Varsity, the largest online stock market education book in the
              world covering everything from the basics to advanced trading.
            </p>
          </div>
          <a href="/">
            Varsity{" "}
            <i class="fa-solid fa-arrow-right" style={{ fontSize: "12px" }}></i>
          </a>
          <div className="mt-3">
            <p className="fs-5 text-muted">
              TradingQ&A, the most active trading and investment community in
              India for all your market related queries.
            </p>
          </div>
          <a href="/">
            TradingQ&A{" "}
            <i class="fa-solid fa-arrow-right" style={{ fontSize: "12px" }}></i>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Education;
