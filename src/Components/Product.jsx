import React from "react";
import { Typography, Row, Col, Card } from "antd";
import {CheckCircleOutlined } from "@ant-design/icons"
const { Title } = Typography;
const Product = () => {
  return (
    <div className="product-container"  id="product">
      <div className="product-title">
        <Title level={1}>OUR PRODUCT</Title>
      </div>
      <Row xs={24} style={{marginTop:"10em"}}>
        <Col  className="product-row">
          <div className="card-container">
            <Card hoverable style={{height:"40vh", width:"50vh", margin:"10px 50px 10px 120px"}}>
            <CheckCircleOutlined style={{fontSize:"5em", padding:"20px 0 40px 0", display:"flex", justifyContent:"center"}}/>
              <Title style={{display:"flex", justifyContent:"center"}}>SEO</Title>
              <p style={{fontSize:"1.4em"}}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
                oluptatum animi ipsam, eos impedit! Consectetur
              </p>
            </Card>
          </div>
        </Col>
        <Col  className="product-row">
          <div className="card-container">
            <Card hoverable style={{height:"40vh", width:"50vh", margin:"10px 50px 10px 50px"}}>
            <CheckCircleOutlined style={{fontSize:"5em", padding:"20px 0 40px 0", display:"flex", justifyContent:"center"}}/>
              <Title style={{display:"flex", justifyContent:"center"}}>Branding</Title>
              <p style={{fontSize:"1.4em"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
                oluptatum animi ipsam, eos impedit! Consectetur</p>
            </Card>
          </div>
        </Col>
        <Col  className="product-row">
          <div className="card-container">
            <Card hoverable style={{height:"40vh", width:"50vh", margin:"10px 50px 10px 50px"}}>
            <CheckCircleOutlined style={{fontSize:"5em", padding:"20px 0 40px 0", display:"flex", justifyContent:"center"}}/>
              <Title style={{display:"flex", justifyContent:"center"}}>Logo</Title>
              <p style={{fontSize:"1.4em"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
                oluptatum animi ipsam, eos impedit! Consectetur</p>
            </Card>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Product;

