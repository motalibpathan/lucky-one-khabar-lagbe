import React, { useState } from "react";
import CartItem from "../CartItem/CartItem";
import "./Cart.css";

const Cart = ({ cart, setCart }) => {
  const [randomFood, setRandomFood] = useState({});

  const handleChooseRandomly = () => {
    if (cart.length !== 0) {
      const cartLength = cart.length;
      const random = Math.floor(Math.random() * cartLength);
      const food = cart[random];
      setRandomFood(food);
    }
  };

  const handleAgainChoose = () => {
    setCart([]);
    setRandomFood({});
  };

  return (
    <div>
      {randomFood?.name && (
        <div className="p-3 mb-2 rounded bg-green">
          <h5>You can choose this food</h5>
          <CartItem food={randomFood}></CartItem>
        </div>
      )}
      <div className="p-3 rounded bg-orange">
        <h2>Food Cart</h2>
        {cart.map((food) => (
          <CartItem key={food.id} food={food}></CartItem>
        ))}
        <button
          onClick={handleChooseRandomly}
          className="btn border border-success my-2"
        >
          Choose 1 for me
        </button>
        <br />
        <button
          onClick={handleAgainChoose}
          className="btn border border-danger"
        >
          Choose again
        </button>
      </div>
    </div>
  );
};

export default Cart;
