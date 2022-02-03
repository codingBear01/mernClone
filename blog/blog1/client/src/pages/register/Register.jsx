import { Link } from "react-router-dom";
import "./register.css";

export default function Register() {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>

      <form className="registerForm">
        <label>Username</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Please Enter Your Name"
        />

        <label>Email</label>
        <input
          className="registerInput"
          type="email"
          placeholder="Please Enter Your Email"
        />

        <label>Password</label>
        <input
          className="registerInput"
          type="password"
          placeholder="Please Enter Your Password"
        />

        <button className="registerButton">Register</button>
      </form>

      <button className="registerLoginButton">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
    </div>
  );
}
