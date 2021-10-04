import React from "react";
import img from '../../images/images-removebg-preview.png'
import Explore from "../Explore/Explore";
import './Home.css';
const Home = () => {
  return (
    <div className="Home container">
      <div className="jumbotrone">
        <div className="card shadow inCard" style={{width: '30rem'}}>
          <div className="card-body">
            <h3 className="card-title title">Always Learn Something new</h3>
            <p className="card-text">
            With courses added regularly to our catalog, you always get the latest skills. 
            </p>
           
          </div>
        </div>
        <div>
        <img src={img} alt="" />
        </div>
      </div>
      <Explore></Explore>
    </div>
  );
};

export default Home;
