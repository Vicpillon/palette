import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// 백엔드 데이터를 axios를 통해서 전달받음
import axios from "axios";

const User = {
  "email":"admin@admin.com",
  "password":"adminadmin"
}

function Login() {
  const navigate = useNavigate();

  // 이메일이나 비밀번호가 없으면 회원가입 요청하기
  const goToMain = () => {
    if (email.includes("@") && password.length >= 5) {
      navigate("/main");
    } else {
      alert("가입된 회원이 아닙니다. 회원가입을 먼저 해주세요.");
    }
  };

  // 버튼 구현
  const [active, setActive] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(email);
  console.log(password);

  const ActiveIsPassedLogin = () => {
    return email.includes("@") && password.length >= 5
      ? setActive(true)
      : setActive(false);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  // await async 사용하여 백엔드와 데이터 주고받아서 로그인 처라하기
  // 더 추가할 것
  const onClickLoginButton = async (event) => {
    const authResult = await axios
      .post("/api/login", { email, password })
      .then((res) => res.data)
      .catch((err) => null);

    if (!authResult || !authResult.success) {
      alert("로그인 실패");
    }

    if ("success" in authResult && authResult.success) {
      goToMain();
    }
  };

  };

  return (
    <>
      <section className="login">
        <form action="" method="post" className="loginForm">
          <h1>Shopping Mall</h1>
          {/*  */}
          <div className="emailForm">
            <input
              type="text"
              id="email"
              name="email"
              placeholder="test@example.com"
              onKeyUp={ActiveIsPassedLogin}
              onChange={handleEmail}
            />
          </div>
          <div className="passwordForm">
            <input
              type="password"
              id="pw"
              name="pw"
              placeholder="password"
              onKeyUp={ActiveIsPassedLogin}
              onChange={handlePassword}
            />
          </div>
          <button
            type="button"
            onClick={onClickLoginButton}
            name=""
            className={active ? "activeLoginBtn" : "loginBtn"}
            disabled={email === "" || password === "" ? true : false}
          >
            로그인
          </button>

          <button type="button" onClick={() => navigate("/signup")}>
            회원가입
          </button>
        </form>
      </section>
    </>
  );


export default Login;
