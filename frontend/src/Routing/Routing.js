import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Register, Login } from "Components";
import { Hero } from "Components";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default Routing;
