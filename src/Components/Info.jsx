import React from 'react'
import { Row, Col, Carousel } from 'antd'
import {RightOutlined, LeftOutlined} from "@ant-design/icons";
const contentStyle = {
  height: '400px',
  color: '#fff',
  paddingTop:"100px",
  lineHeight: '200px',
  textAlign: 'center',
  background: '#364d79'
}


const SampleNextArrow = props => {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        color: 'black',
        fontSize: '20px',
        lineHeight: '1'
      }}
      onClick={onClick}
    >
      <RightOutlined />
    </div>
  )
}

const SamplePrevArrow = props => {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        color: 'black',
        fontSize: '20px',
        lineHeight: '1'
      }}
      onClick={onClick}
    >
      <LeftOutlined />
    </div>
  )
}

const settings = {
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />
}

const Info = () => {
  return (
    <>
      <Row justify="center">
        <Col span={16}>
          <Carousel arrows {...settings}>
            <div>
              <h3 style={contentStyle}>1</h3>
            </div>
            <div>
              <h3 style={contentStyle}>2</h3>
            </div>
            <div>
              <h3 style={contentStyle}>3</h3>
            </div>
            <div>
              <h3 style={contentStyle}>4</h3>
            </div>
          </Carousel>
        </Col>
      </Row>
    </>
  )
}

export default Info