import React from "react";
import basir1 from "../assets/basir1.png";
import axios from "axios";
import "./Apph.css";
import { useState } from "react";
function Home() {
  const [Task, setTask] = useState("");
  const token = localStorage.getItem("token");
  const Handletask = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:7001/Adding",
        {
          Task: Task,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // ✅ pass token
          },
        }
      );
      if (response.status === 200 || response.status === 201) {
        console.log("Task Is Saved In Data Base ");
        setTask("");
      }
    } catch (error) {
      if (error.response.data.message) {
        console.log(error.response.data.message);
      } else {
        console.log("error from the Task saving ", error);
      }
    }
  };

  return (
    <div className="homemain">
      <img className="img1" src={basir1} alt="" />
      <div className="dj1">
        <p className="dj2">Manage Your Task With Us </p>
        <div className="dj5">
          <form onSubmit={Handletask}>
            <input
              type="text"
              value={Task}
              onChange={(e) => setTask(e.target.value)}
              className="dj3"
              name="allinput"
              placeholder="Add Your Job'S"
            />{" "}
            <input className="dj4" type="submit" value="Add" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;
