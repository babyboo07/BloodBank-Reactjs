import "./App.css";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
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
import { Layout } from "antd";
import Dashboard from "./Component/Dashboard/Dashboard";
import AdminList from "./Component/Admin/AdminList";
import HeaderLayout from "./Component/Layout/HeaderLayout";

const { Content, Footer } = Layout;

function App() {
  const [isCollapse, setIsCollapse] = useState(false);
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Siderbar isCollapse={isCollapse}></Siderbar>
          <Layout>
            <HeaderLayout
              isCollapse={isCollapse}
              setIsCollapse={setIsCollapse}
            />
            <Content style={{ margin: "24px 16px 0" }}>
              <div
                className="site-layout-background"
                style={{ padding: 24, minHeight: 360 }}
              >
                {/* <Header /> */}
                <Content
                  className="bg-white"
                  style={{
                    margin: "0 16px",
                  }}
                >
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/account/list" element={<AdminList />} />
                  </Routes>
                </Content>
                <Routes>
                  <Route path="/login" element={<Login />} />
                  {/* <Routes path="/register" element={<Register />} /> */}
                </Routes>
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Ecommerce ©2022 Created by Babyboo with
              {/* <FontAwesomeIcon icon={faHeart} color={"red"} /> */}
            </Footer>
          </Layout>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
