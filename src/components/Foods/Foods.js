import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Cart from "../Cart/Cart";
import Food from "../Food/Food";
import "./Food.css";

const Foods = () => {
  const [allFoods, setAllFoods] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("foods.json")
      .then((res) => res.json())
      .then((data) => setAllFoods(data));
  }, []);

  const handleAddToCart = (selectedFood) => {
    const exits = cart.find((item) => item.id === selectedFood.id);
    if (!exits) {
      const newCart = [...cart, selectedFood];
      setCart(newCart);
    }
  };

  return (
    <div className="container">
      <div className="row my-3">
        <div className="col-md-9 mb-3">
          <Row xs={1} md={3} className="g-4">
            {allFoods.map((food) => (
              <Food
                key={food.id}
                food={food}
                handleAddToCart={handleAddToCart}
              ></Food>
            ))}
          </Row>
        </div>
        <div className="col-md-3">
          <Cart cart={cart} setCart={setCart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Foods;
