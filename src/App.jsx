import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./assets/pages/Home";
import CustomCursor from "./assets/components/CustomCursor/CustomCursor";
const App = () => {
  return (
    <Router>
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
