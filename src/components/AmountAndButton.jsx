import React from "react";

const AmountAndButton = () => {
  return (
    <div className="amt-and-btn-flex">
      <div className="amt-flex">
        <span className="quantity-operator">-</span>
        <span>1</span>
        <span className="quantity-operator">+</span>
      </div>
      <button>Add to Cart</button>
    </div>
  );
};

export default AmountAndButton;
