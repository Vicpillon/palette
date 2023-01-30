import React, { Component } from'react';
import './App.css';

function App() {

  return (
    
    <div className="App">
      <header className="App-header">
      <div>  
        // Top 부분
        // 브라우저명 , 팀 회의를 통해서 구체적인 판매상품과 쇼핑몰 이름 정해야함.
        <title>팔레트 쇼핑</title>
        
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          
            <a className="navbar-brand" href="#">Shopping </a> 
          

            <ul className="navbar-nav">
              <li className="nav-item">
              <a className="nav-link" href="http://localhost:3001/login">Login</a> 
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Join</a> 
              </li>
               <li className="nav-item">
                <a className="nav-link" href="#">Users</a> 
              </li>
          
              // 아래의 코드는 추후 기능을 생각해서 작성.
              <li className="nav-item dropdown"> 
                <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                  Dropdown link
                </a>
                <div className="function">
                  <a className="new_function" href="#">Link 1</a>
                  <a className="new_function" href="#">Link 2</a>
                  <a className="new_function" href="#">Link 3</a>
                </div>
              </li>
            </ul>
        </nav>



        // body 부분
        <div className="product"></div>
        <p>Index Page</p>
    

  
        // Footer 부분
        <div className="container">
            <p>Contect us : Elice AI6</p>
        </div>
    </div>
    
    </header>
  </div>
  );
  
}

export default App;
