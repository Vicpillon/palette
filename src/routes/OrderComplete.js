import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const OrderComplete = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <P1>주문이 완료되었습니다.</P1>
        {/* <Button
          onClick={() => {
            navigate("/");
          }}
        >
          주문 내역 보기
        </Button> */}
        <HomeButton
          onClick={() => {
            navigate("/");
          }}
        >
          쇼핑 계속하기
        </HomeButton>
      </Container>
    </>
  );
};
