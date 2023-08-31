import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./About/About";
import Vans from "./Vans/Vans";
import Home from "./Home/Home";

export default function App() {
    return(
      <div className="main--container">
        <div className="container">
        <BrowserRouter>
        <div className="header">
            <div>
            <Link className="link-btns logo" to="/">#VANLIFE</Link>
            </div>
            <div className="right-header">
            <Link className="link-btns about-link" to="/about">About</Link>
            <Link className="link-btns vans-link" to="/vans">Vans</Link>
            </div>
        </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vans" element={<Vans />} />
          </Routes>
        </BrowserRouter>
        <footer>
          <span className="footer-text">Ⓒ 2022 #VANLIFE</span>
        </footer>
        </div>
        </div>
    )
}