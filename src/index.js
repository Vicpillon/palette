// 입구, 전역적인 설정
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//* 2)라우터 불러오기
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Category from "./pages/Category";
import AppLayout from "./components/common/Applayout.js";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Category",
    element: <Category />,
  },
]);
//id 값이 root 인 태그로 렌더링 되라. (public/index.js)에 id=root 있다.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App />
    {/* AppLayout 으로 모든 라우터 페이지를 감싸놨다. */}
    <AppLayout>
      <RouterProvider router={router} />
    </AppLayout>
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// 1.Header, main, Footer 공통구조를 매 페이지마다 적어줄 수 없으니, 하나 만들어놓고 끼고 있게 해주면 된다. 이런거를 기본 UI 작업할때 실행

//2.Router 
