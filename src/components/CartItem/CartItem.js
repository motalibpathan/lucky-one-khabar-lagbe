import React from "react";

const CartItem = ({ food }) => {
  const { img, name } = food;
  return (
    <div className="rounded border border-dark d-flex my-3 p-2">
      <img src={img} alt="food" width="60" className="me-2" />
      <h6>{name}</h6>
    </div>
  );
};

export default CartItem;
