import React from "react";
import "../../index.css";

const Button = ({ fetchPics }) => {
  return (
    <button className="Button" onClick={fetchPics}>
      Load more
    </button>
  );
};

export default Button;
