import React, { useState } from "react";
import "./Appl.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function Login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [hamarmsg, sethamarmsg] = useState("");
  const usenavigate1 = useNavigate();
  const LoginHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:7001/login", {
        username,
        password,
      });
      console.log("You Login Successfully ...");
      setusername("");
      setpassword("");

      if (response.status === 200 || response.status === 201) {
        usenavigate1("/home");
        sethamarmsg("");
      }
    } catch (error) {
      if (error.response.data.message) {
        sethamarmsg(error.response.data.message);
      }
      console.log("error from login ", error);
    }
  };
  return (
    <div className="basmain1">
      <div className="basf1">
        <p className="basp6">Login</p>
        <p className="basp3">{hamarmsg}</p>

        <form onSubmit={LoginHandler} className="basf2">
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setusername(e.target.value)}
            placeholder="Email"
            id="kam2"
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            placeholder="password"
            id="kam2"
          />
          <input type="submit" value="Login" id="il1" />
          <p className="baak">
            I don't have an Account ?{" "}
            <span className="baak1">
              <Link to="/signup">Sign up</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
