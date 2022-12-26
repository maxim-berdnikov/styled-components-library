import React, { CSSProperties } from "react";
import "./style.scss";

export const Unfold = () => {
  return (
    <div className="unfold">
      <div className="box">
        <span style={{ "--i": 0 } as CSSProperties}></span>
        <span style={{ "--i": 1 } as CSSProperties}></span>
        <span style={{ "--i": 2 } as CSSProperties}></span>
        <span style={{ "--i": 3 } as CSSProperties}></span>
      </div>
    </div>
  );
};