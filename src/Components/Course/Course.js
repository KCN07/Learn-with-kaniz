import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Course.css";

const Course = (props) => {
  const { title, img, instructor, ratting, price } = props.course;
  
  return (
    <div
      className="card border shadow p-3 "
      style={{ width: "15rem", height: "30rem" }}
    >
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h4 className="card-title" style={{ color: "blue" }}>
          {title}
        </h4>
        <small>{instructor}</small>
        <p className="card-text">Ratting: {ratting}/5</p>
        <h4 style={{ fontWeight: "bolder" }}>{price} $</h4>
        <button
          onClick={() => props.handleAddToCart(props.course)}
          className="btn-regular"
        >
          <FontAwesomeIcon icon={faShoppingCart} /> add to cart
        </button>
      </div>
    </div>
  );
};

export default Course;
