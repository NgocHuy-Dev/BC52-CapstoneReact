import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../../components/Header";
import "./style.css";
import Footer from "../../components/Footer";

export default function MainLayout() {
  return (
    <div className="App">
      <div className="dummy-element"></div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
