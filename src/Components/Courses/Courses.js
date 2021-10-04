import React, { useState } from "react";
import { useHistory } from "react-router";
import Cours from "../Cours/Cours"
import useCourses from "../../Hooks/useCourses";
import Cart from "../Cart/Cart";


const Courses = () => {
  const [courses, setCourses] = useCourses();
  const [cart, setCart] = useState([]);
  const history = useHistory();

  const handlePlaceOrder = () => {
    setCart([]);
    history.push("/placeorder");
  };

  const handleAddToCart = (member) => {
    const newCart = [...cart, member];
    setCart(newCart);
  };

  return (
    <div className="home-container m-5">
      <div className="exp-container border rounded ps-4 py-5 me-3">
        <h2 className="title pb-3">All Courses</h2>

        <div className="course-container">
          {courses.map((course) => (
            <Cours
              key={course.id}
              course={course}
              handleAddToCart={handleAddToCart}
            ></Cours>
          ))}
        </div>
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <button onClick={handlePlaceOrder} className="btn-regular">
            Place Your Order
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default Courses;
