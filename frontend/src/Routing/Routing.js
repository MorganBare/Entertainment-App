import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignUp, Login } from "Components";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default Routing;
