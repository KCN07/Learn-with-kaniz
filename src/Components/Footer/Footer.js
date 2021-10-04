import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer mt-5 p-5 ">
      <div className="container">
        <div className="foo1">
          <h6>Business</h6>
          <h6>Terms & policy</h6>
          <h6>Help & Support</h6>
        </div>
        <div className="foo2">
          <h1>Learn With Kaniz</h1>
          <small className="p-3">&copy; 2021 Learn with kaniz</small>
        </div>
      </div>
    </div>
  );
};

export default Footer;
