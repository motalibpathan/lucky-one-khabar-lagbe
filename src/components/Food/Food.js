import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, Col } from "react-bootstrap";
import "./Food.css";

const Food = ({ food, handleAddToCart }) => {
  const { name, price, img } = food;
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={img} width="200" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>Price: ${price}</Card.Text>
          <button
            onClick={() => handleAddToCart(food)}
            className="btn btn-orange d-flex w-100 align-items-center justify-content-center"
          >
            <h6 className="me-2">Add to cart</h6>
            <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
          </button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Food;
