import React from "react";
import Amount from "../components/Amount";

const AmountAndButton = () => {
  return (
    <div className="amt-and-btn-flex">
      <Amount />
      <button>Add to Cart</button>
    </div>
  );
};

export default AmountAndButton;
