import React from "react";
import { Typography, Row, Col, Button, Input } from "antd";

import Info from "./Info";
const { Title } = Typography;
const Footer = () => {
  return (
    <div id="contact">
        <Info />
      <Row xs={24} sm={16} lg={8}
        style={{
          backgroundColor: "lightgreen",
          height: "10vh",
          justifyContent: "center",
        }}
      >
        <Col style={{ padding: "30px 20px 0 10px" }}>
          <Input placeholder="Email ID" size="large" />
        </Col>
        <Col style={{ padding: "30px 20px 20px 10px" }}>
          <Button size="large">Search</Button>
        </Col>
      </Row>
      <Row xs={24} sm={16} lg={8} style={{ height: "30vh", width: "100vw", marginLeft: "60px" }}>
        <Col style={{ heigth: "30vh", width: "30vw" }}>
          <Title
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "20px",
            }}
          >
            About Company
          </Title>
          <p style={{ padding: "40px 20px 0 60px", fontSize: "1.5em" }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime,
            ipsa laudantium. At fugit ullam iure. Praesentium nesciunt dicta
            facere quas quibusdam unde nulla doloremque. Ut quam aspernatur
            corporis dolores eligendi?
          </p>
        </Col>
        <Col style={{ heigth: "30vh", width: "30vw" }}>
          <Title
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "20px",
            }}
          >
            Quick Links
          </Title>
          <Row xs={24} sm={16} lg={8} className="footer-row-1" style={{ justifyContent:"center", alignItems:"center"}}>
          <div style={{ fontSize: "1.5em"}}>
            <a href="#home">
              <p>Home</p>
            </a>
            <a href="#product">
              <p>Product</p>
            </a>
            <a href="#pricing">
              <p>Pricing</p>
            </a>
            <a href="#contact">
              <p>Contact Us</p>
            </a>
          </div>
          </Row>
        </Col>
        <Col style={{ heigth: "30vh", width: "30vw" }}>
          <Title
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "20px",
            }}
          >
            Contact Us
          </Title>
          <p style={{ padding: "40px 20px 0 60px", fontSize: "1.5em" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            repellat omnis provident enim dolorem quos laudantium autem
            aspernatur commodi officia quaerat assumenda veniam tempore minima
            nihil obcaecati, in cumque non.
          </p>
        </Col>
      </Row>
      <Row
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: "5vh",
          marginTop: "50px",
          backgroundColor: "black",
          color: "white",
        }}
      >
        <p style={{ fontSize: "2em" }}>Copyright 2014</p>
      </Row>
    </div>
  );
};

export default Footer;
