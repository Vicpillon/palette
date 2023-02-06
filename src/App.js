import React from "react";
import Login from "./routes/Login";
import Logout from "./routes/Logout";
import SignUp from "./routes/SignUp";
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
  );
}