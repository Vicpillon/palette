import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import {Nav} from "react-bootstrap";
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};


const Main = () => {
  const maincategory = [
    "Woody",
    "Citrus",
    "Fruity",
    "Floral",
    "Musk",
    "Smoky"
  ];
  const navigate = useNavigate();

  return (
    <div>
      <Nav.Link onClick = {() => {
          navigate("/Login")
        }}>
          로그인
        </Nav.Link>
        <Nav.Link onClick = {() => {
          navigate("/Logout")
        }}>
          로그아웃
        </Nav.Link>
        <Nav.Link onClick = {() => {
          navigate("/SignUp")
        }}>
          회원가입
        </Nav.Link>

        <Slider {...settings}>
          {maincategory.map((category) => (
            <div type = {category}
              className = "category"
              onClick = {() => navigate(`./components/Category`)}
            >
            </div>
          ))}
        </Slider>
      </div>
  );
};

export default Main;