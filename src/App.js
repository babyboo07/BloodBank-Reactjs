import "./App.css";
import "antd/dist/antd.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { BrowserRouter, Router, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Siderbar from "./Component/Layout/Sidebar";
import Header from "./Component/Layout/Header";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes></Routes>

        <Header />
        <Siderbar />
      </BrowserRouter>
    </div>
  );
}

export default App;
