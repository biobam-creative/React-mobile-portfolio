import { useState } from "react";
import "./App.css";
import styled from "styled-components";
import Home from "./components/pages/home";
import Portfolio from "./components/pages/portfolio";
import Contact from "./components/pages/contact";
import NavBar from "./components/ui-elements/nav bar";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <div>
            <NavBar />
            <Routes>
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
               
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    );
}

export default App;
