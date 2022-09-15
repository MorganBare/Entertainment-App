import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Register, Login, ProtectedRoute } from "Components";
import { Home, Movies } from "Pages";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
        </Route>

        <Route path="/sign-up" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default Routing;
