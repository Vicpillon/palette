import React from 'react';
import axios from 'axios';
import {Navigate} from "react-router-dom";

<<<<<<< HEAD
export default function Logout() {
=======

export default  function Logout() {
>>>>>>> 8d753a200ce77338ec10b8bd0d729315cafc4a73
    const onClickHandler = () => {

        axios.get(`/api/v1/auth/logout`)
        .then((res)=> {
            if(res.data.success) {
                Navigate("/");
            }else {
                alert("로그아웃 실패")
            }   
    });
};

return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100vh" }}>
      <h2>시작페이지</h2>

      <button onClick={onClickHandler}>로그아웃</button>
    </div>
  );
}