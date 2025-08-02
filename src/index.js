import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import HomePage from "./landing-page/home/HomePage";
import About from "./landing-page/about/AboutPage";
import Pricing from "./landing-page/home/Pricing";
import Product from "./landing-page/products/Product";
import Signup from "./landing-page/signup/Signup";
import Support from "./landing-page/support/SupportPage";
import Navbar from "./landing-page/Navbar";
import Footer from "./landing-page/Footer";
import Nopage from "./landing-page/Nopage";
import DashboardRedirect from "./landing-page/dashboard/Dashboard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/About" element={<About />} />
      <Route path="/Pricing" element={<Pricing />} />
      <Route path="/Product" element={<Product />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Support" element={<Support />} />
      <Route path="/dashboard" element={<DashboardRedirect />} />

      <Route path="*" element={<Nopage />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
