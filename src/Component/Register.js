import { Form, Input } from "antd";
import "../Css/Login.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="login-box">
      <h2>Đăng ký</h2>
      <form>
        <div className="user-box">
          <input type="text" name="" required="" />
          <label>Username</label>
        </div>
        <div className="user-box">
          <input type="email" name="" required="" />
          <label>Email</label>
        </div>
        <div className="user-box">
          <input type="password" name="" required="" />
          <label>Password</label>
        </div>
        <div>
          <Link className="p-0 float-end m-0"style={{fontSize:"10px"}} to="/login">
            Đăng Nhập Tài Khoản
          </Link>
        </div>
        <a href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </a>
      </form>
    </div>
  );
};

export default Register;
