import React from "react";
import Login from "./Component/Login";
import Payment from "./Component/Payment";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";

const isLoggedIn = true; // Replace this with your actual authentication logic

function App() {
  return (
    <div>
      {isLoggedIn} {/* Conditionally render Navbar based on login status */}
      <Routes>
        <Route path="/" element={<Login />} />
        {isLoggedIn && (
          <>
            <Route path="home" element={<Home />} />
            <Route path="payment" element={<Payment />} />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
