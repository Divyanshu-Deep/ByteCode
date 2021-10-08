import React from "react";
import { Row, Button } from "antd";


const Main = () => {
  return (
    <>
      <div
        id="home"
        style={{ width: "100vw", height: "100vh", marginTop: "5em" }}
      >
        <Row
          xs={24}
          sm={16}
          lg={8}
          style={{ justifyContent: "center", padding: "50px 0 50px 0" }}
        >
          <p style={{ fontSize: "2.5em" }}>We Help Business</p>
        </Row>
        <Row style={{ justifyContent: "center", padding: "50px 0 50px 20px" }}>
          <p style={{ fontSize: "2em" }}>
            It is long established fact that reader is distarcted by the
            readable content of a page when looking at the layout
          </p>
        </Row>
        <Row style={{ justifyContent: "center", padding: "20px 0 20px 0" }}>
          <Button size="large">Learn More</Button>
        </Row>
      </div>
    </>
  );
};

export default Main;
