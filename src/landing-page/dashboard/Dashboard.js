import React, { useState } from "react";

function DashboardRedirect() {
  const handleRedirect = () => {
    window.location.href = "http://localhost:3001";
  };

  return (
    <div>
      <h2>Frontend Home</h2>
      <button onClick={handleRedirect}>Go to Dashboard</button>
    </div>
  );
}

export default DashboardRedirect;
