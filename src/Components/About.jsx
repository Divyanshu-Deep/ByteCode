import React from "react";
import { Card, Row, Col } from "antd";
import image from "../image/image-1.png"
const About = () => {
  return (
    <div className="about-container" id="pricing">
      <Row gutter={16}>
          <Col span={8} offset={4} >
         <Card style={{ height: 500, width: 700, marginTop:"15em"}} >
           <p style={{fontSize: "3em"}}>
             About Us
           </p>
           <p style={{ fontSize:"1.4em"}}>
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus exercitationem assumenda recusandae autem, magnam fugit ratione? Explicabo laudantium culpa provident, nostrum ex voluptatum illo, dignissimos officiis rem, at ipsam aperiam?
             
           </p>
         </Card>
          </Col>
          <Col span={8} offset={2} style={{ marginTop: "15em"}}>
          <img src={(image)} alt="fetching..." />
          </Col>
      </Row>
    </div>
  );
};

export default About;

