import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css";
import React from "react";
import { BrowserRouter, Router, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Siderbar from "./Component/Layout/Sidebar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes></Routes>

        <Siderbar />
      </BrowserRouter>
    </div>
  );

  // return <Siderbar />;
}

export default App;
