import { Badge, Button, Col, Dropdown, Input, Menu, PageHeader, Row, Space } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import "../../Css/Header.css"

const Header = () => {
  const menu = (
    <Menu
      items={[
        {
          label: (
            <a
              className="menu-item"
              target="_blank"
              rel="noopener noreferrer"
              href={`/user/myorder/`}
            >
              Đơn hàng của tôi
            </a>
          ),
        },
        {
          label: (
            <a
              className="menu-item"
              target="_blank"
              rel="noopener noreferrer"
              href="#"
            >
              Quản lý đổi trả
            </a>
          ),
        },
        {
          label: (
            <a
              className="menu-item"
              target="_blank"
              rel="noopener noreferrer"
              href="#"
            >
              Thông báo của tôi
            </a>
          ),
        },
        {
          label: (
            <Link
              className="menu-item"
              target="_blank"
              rel="noopener noreferrer"
              to={`/user/userdetail/`}
            >
              Tài khoản của tôi
            </Link>
          ),
        },
        {
          label: (
            <a
              className="menu-item"
              target="_blank"
              rel="noopener noreferrer"
              href="/user/productevaluate"
            >
              Nhận xét sản phẩm đã mua
            </a>
          ),
        },
        {
          label: (
            <button
              style={{ background: "none", border: "none" }}
              className="menu-item p-0"
              target="_blank"
              rel="noopener noreferrer"
              href="/"
            >
              Thoát tài khoản
            </button>
          ),
        },
      ]}
    />
  );
  return (
    <div className="header">
      <PageHeader className="page-header p-0 pb-2">
        <Row className="w-100">
          <Col xs={3}>
            <a href="/">
              <img
                alt="logo"
                src={
                  "https://salt.tikicdn.com/ts/upload/ae/f5/15/2228f38cf84d1b8451bb49e2c4537081.png"
                }
                width={70}
              />
            </a>
          </Col>
          <Col xs={16} className="mt-1">
          
          </Col>
          <Col xs={1} className="mx-3">
          </Col>
          <Col xs={2}>
          <Dropdown overlay={menu}>
                <a
                  onClick={(e) => e.preventDefault()}
                  style={{ textDecoration: "none" }}
                  className="text-white"
                >
                  <Space>
                    <FontAwesomeIcon icon={faUser} size="2x" />
                    <div className="col-12 user">
                      <div>Tài khoản</div>
                      <div>
                        <FontAwesomeIcon icon={faChevronDown} />
                      </div>
                    </div>
                  </Space>
                </a>
              </Dropdown>
              <div>
                <NavLink
                  style={{ textDecoration: "none" }}
                  to={"#"}
                  className={"text-light"}
                >
                  Register /
                </NavLink>
                <NavLink
                  style={{ textDecoration: "none" }}
                  to={"#"}
                  className={"text-light"}
                >
                  Login
                </NavLink>
              </div>
          </Col>
        </Row>
      </PageHeader>
    </div>
  );
};

export default Header;
