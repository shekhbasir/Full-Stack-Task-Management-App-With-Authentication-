import React, { useState } from "react";
import axios from "axios";
import "./Apps.css";
import { useNavigate, Link } from "react-router-dom";
function Signup() {
  const [name, setname] = useState("");
  const [role, setrole] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [error1, seterror1] = useState("");
  const [feild1, setfeild1] = useState("");
  const usenavigate = useNavigate();
  //for doing this i am going to use the

  const Handlesignup = async (e) => {
    e.preventDefault();
    try {
      if (!name || !role || !username || !password) {
        setfeild1("Plz Fill All Feild ..");
      }
      const response = await axios.post("http://localhost:7001/signup", {
        name,
        role,
        username,
        password,
      });

      setname("");
      setrole("");
      setusername("");
      setpassword("");

      if (response.status === 201) {
        usenavigate("/login");
        seterror1("");
        setfeild1("");
      }

      console.log(response.data.message);
    } catch (error) {
      if (error.response.data.message) {
        seterror1(error.response.data.message);
      } else {
        console.log("error will generated from the Handlesignup routes", error);
      }
    }
  };

  return (
    <div className="basmain">
      <div className="basf">
        <p className="basp1">Sign up </p>

        <form onSubmit={Handlesignup} className="basallinput">
          <p className="baser">{error1}</p>
          <p className="baser">{feild1}</p>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            id="kam"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
          <input
            type="text"
            value={role}
            onChange={(e) => setrole(e.target.value)}
            name="role"
            placeholder="Your Role"
            id="kam"
          />
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setusername(e.target.value)}
            placeholder="Email"
            id="kam"
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            placeholder="Password"
            id="kam"
          />
          <input type="submit" value="Sign up" className="kamkar" />
          <p className="tv1">
            Already have an Account ?{" "}
            <span className="haml">
              <Link to="/login">Login</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
