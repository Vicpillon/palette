import React from "react";
import Main from "./routes/Main";
import Login from "./routes/Login";
import Logout from "./routes/Logout";
import SignUp from "./routes/SignUp";
import SignUpDone from "./routes/SignUpDone";
import Category from "./components/Category";
import { Nav,Container } from "react-bootstrap";

import { BrowserRouter as Router,Routes,Route, useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  return (
    <Container>
      <header> 

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

      </header>
      <Routes>
          <Route path='/' element={<App />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signupdone' element={<SignUpDone />} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/category' element={<Category />} />
      </Routes>

    </Container>
  );
}

export default App;