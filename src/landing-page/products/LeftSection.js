import React from "react";
function LeftSection({ imageUrl, title, description, linkimage1, linkimage2 }) {
  return (
    <div className="container mt-5">
      <div className="row ">
        <div className="col-6">
          <img src={imageUrl} style={{ width: "80%", marginLeft: "20px" }} />
        </div>
        <div className="col-6 p-5">
          <h3>{title}</h3>
          <p className="mt-5 fs-6 text-muted">{description}</p>
          <div className="mt-5 mx-5">
            <a href="/" style={{ marginRight: "25px" }}>
              <img src={linkimage1} />
            </a>
            <a href="/">
              <img src={linkimage1} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LeftSection;
