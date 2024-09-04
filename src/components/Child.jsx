import React from "react";

const Child = ({ changeBgColor }) => {
  return (
    <div>
      <h2>Child Component</h2>
      <button
        onClick={changeBgColor}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Change Parent Background Color
      </button>
    </div>
  );
};

export default Child;
