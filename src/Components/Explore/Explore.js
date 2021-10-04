import React, { useState } from "react";
import { useHistory } from "react-router";
import useCourses from "../../Hooks/useCourses";
import Cart from "../Cart/Cart";
import Course from "../Course/Course";
import './Explore.css'

const Explore = () => {
  const [courses, setCourses] = useCourses();
  const [cart, setCart] = useState([]);
  const history = useHistory();
  const esCourses = courses.slice(0, 4);

  const handlePlaceOrder = () => {
    setCart([]);
    history.push("/placeorder");
  };

  const handleAddToCart = (member) => {
    const newCart = [...cart, member];
    setCart(newCart);
  };

  return (
    <div className="home-container">
      <div className="exp-container border rounded ps-4 py-5 me-3">
        <h2 className="title pb-3">Trending</h2>
        
          <div className="course-container">
            {esCourses.map((course) => (
              <Course
                key={course.id}
                course={course}
                handleAddToCart={handleAddToCart}
              ></Course>
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

export default Explore;
