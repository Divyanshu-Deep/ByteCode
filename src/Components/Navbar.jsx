import React from "react";
import { Typography } from "antd";


const {Title} = Typography;
const Navbar = () => {
  return (
    <div className="navbar-main">
      <div className="navbar-logo">
       <span className="logo-1"> Project</span>
      </div>
      <div className="navbar-items">
        
        
         <a href="#main"><Title level={2} className="item">Home</Title></a>
          <a href="#product">
            <Title level={2} className="item">Product</Title>
          </a>
          <a href="#pricing">
            <Title level={2} className="item">Pricing</Title>
          </a>
          <a href="#contact">
            <Title level={2} className="item">Contact</Title>
          </a>
        
      </div>
    </div>
  );
};

export default Navbar;
