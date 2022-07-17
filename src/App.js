import "./App.css";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import {
  BrowserRouter,
  Router,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Siderbar from "./Component/Layout/Sidebar";
import Header from "./Component/Layout/Header";
import Login from "./Component/Login";
import Register from "./Component/Register";

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <Header /> */}
        {/* <Siderbar /> */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
