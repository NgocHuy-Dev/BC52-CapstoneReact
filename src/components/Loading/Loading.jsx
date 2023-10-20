import React from "react";
import "./style.css";

export default function Loading() {
  return (
    <div className="main">
      <div className="lds-ring childrent">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}
