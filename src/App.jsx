import React from "react";
import Login from "./Component/Login";
import Payment from "./Component/Payment";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="payment" element={<Payment />} />
    </Routes>
  );
}
