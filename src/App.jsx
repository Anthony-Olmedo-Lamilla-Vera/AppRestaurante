import { useState } from "react";
import logo from "./logo.svg";
import { AiOutlineArrowUp } from "react-icons/ai";
import "./App.css";
import CardItem from "./Components/CardItem";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexHome from "./Pages/Home/indesHome";
import IndexRoot from "./Pages/Roote/IndexRoot";

function App() {
  return (
    <div className="contain-main">
      <header>
        <img
          src="https://res.cloudinary.com/dvrsowzhf/image/upload/v1652471530/Logotipo_Restaurante_Crema-removebg-preview_o8dwsn.png"
          alt=""
        />
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexHome />} />
          <Route path="/root" element={<IndexRoot />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
