import React from "react";
function OpenAccount() {
  return (
    <div className="container text-center" style={{ marginTop: "100px" }}>
      <div className="row">
        <div className="col">
          <h2 className="mt-5 text-muted">Open a Zerodha account</h2>
          <p className="fs-5 text-muted">
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
            F&O trades.
          </p>
          <button
            type="button"
            class="btn btn-primary fs-4"
            style={{ padding: "5px 25px 5px 25px" }}
          >
            Signup for free
          </button>
        </div>
      </div>
    </div>
  );
}
export default OpenAccount;
