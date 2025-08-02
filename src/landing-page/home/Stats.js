import React from "react";
function Stats() {
  return (
    <div className="container mb-5" style={{ marginTop: "100px" }}>
      <div className="row">
        <div className="col p-3">
          <h2 className="text-muted">Trust with confidence</h2>
          <div className="mt-5">
            <h3 className="text-muted">Customer-first always</h3>
            <p className="fs-5 text-muted">
              That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh
              crores of equity investments, making us India’s largest broker;
              contributing to 15% of daily retail exchange volumes in India.
            </p>
          </div>
          <div className="mt-5">
            <h3 className="text-muted">No spam or gimmicks</h3>
            <p className="fs-5 text-muted">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like
            </p>
          </div>
          <div className="mt-5">
            <h3 className="text-muted">The Zerodha universe</h3>
            <p className="fs-5 text-muted">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
          </div>
        </div>
        <div className="col p-3">
          <img
            src="/media/images/images/ecosystem.png"
            style={{ width: "100%" }}
            alt="ecosystem"
          />
          <a href="/" className="mx-5 ">
            Explore our products{" "}
            <i class="fa-solid fa-arrow-right" style={{ fontSize: "12px" }}></i>
          </a>
          <a href="/" className="mx-5">
            Try Kite demo
            <i class="fa-solid fa-arrow-right" style={{ fontSize: "12px" }}></i>
          </a>
        </div>
      </div>
      <div className="mt-5 text-center">
        <img src="/media/images/images/pressLogos.png" />
      </div>
    </div>
  );
}
export default Stats;
