import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [bgColor, setBgColor] = useState("white");

  const changeBgColor = () => {
    const newColor = bgColor === "white" ? "lightblue" : "white";
    setBgColor(newColor);
  };

  return (
    <div style={{ backgroundColor: bgColor, height: "100vh", padding: "20px" }}>
      <h1>Parent Component</h1>
      <Child changeBgColor={changeBgColor} />
    </div>
  );
};

export default Parent;
