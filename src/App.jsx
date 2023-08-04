import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './components/layout'
import Home from './pages/home'
import Restaurant from './pages/restaurant'
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route exact  path="/" element={<Home />} />
          <Route exact  path="/restaurant" element={<Restaurant />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
