import "../Css/Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="body-login">
      <div className="login-box">
        <h2>Đăng Nhập</h2>
        <form>
          <div className="user-box">
            <input type="text" name="" required="" />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input type="password" name="" required="" />
            <label>Password</label>
          </div>
          <div>
            <Link
              className="p-0 float-end m-0"
              style={{ fontSize: "10px" }}
              to="/register"
            >
              Tạo Mới Tài khoản
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
    </div>
  );
};

export default Login;
