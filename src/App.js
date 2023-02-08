import React from "react";
import MainPage from "./routes/MainPage";
import Login from "./routes/Login";
import Logout from "./routes/Logout";
import SignUp from "./routes/SignUp";
<<<<<<< HEAD
import SignUpDone from "./routes/SignUpDone";
import Appheader from "./common/Appheader";
import { Nav,Container } from "react-bootstrap";

import { BrouserRouter as Router,Routes,Route, useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  return (
    <Container>
      <header> 

         {/* if문써서 로그인 로그아웃 번갈아 띄우기      */}
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
          {/* <Route path='' element={<Home />} /> */}
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signupdone' element={<SignUpDone />} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/' element={<MainPage />} />
      </Routes>

      </Container>
=======
import Cart from "./routes/Cart";

export default function App() {
  
  return (
    <div className="App">
     <>
       <Routes>
         <Route path="/login" element={<Login />} />
         <Route path="/logout" element={<Logout />} />
         <Route path="/signup" element={<Signup />} />
         <Route path="/cart" element={<Cart />} />
       </Routes>
     </>
    </div>
>>>>>>> 8d753a200ce77338ec10b8bd0d729315cafc4a73
  );
}