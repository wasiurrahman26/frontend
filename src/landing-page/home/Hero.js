import React from "react";
function Hero() {
  return (
    <div className="container text-center mb-5">
      <div className="row">
        <div className="col">
          <div className="mb-5 ">
            <img
              src="/media/images/images/homeHero.png"
              alt="hero"
              style={{ width: "65%", height: "80%" }}
            />
          </div>
          <h2 className="mt-5 text-muted">Invest in everything</h2>
          <p className="fs-5 text-muted">
            Online platform to invest in stocks, derivatives, mutual funds,
            ETFs, bonds, and more.
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
export default Hero;
