import React from "react";
import Banner from "./Banner";
import Showing from "./Showing";
import Cinema from "./Cinema";
import Cinemas from "./Cinema/Cinemas";

export default function Home() {
  return (
    <div>
      <Banner id="banner" />
      <Showing id="showing" />
      <Cinema id="cinema" />
    </div>
  );
}
