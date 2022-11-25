import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Auth from "../Auth/Auth";
const Route1 = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" component="Home" />
        <Route exact path="/Auth" />
      </Routes>
    </div>
  );
};
export default Route1;
