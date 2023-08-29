import React, { useState } from "react";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState();
  const [name, setName] = useState();

  const handleEnter = async (e) => {
    e.preventDefault();
    const body = {
      email: email,
      name: name,
    };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };

    try {
      await fetch("http://localhost:4010/user/register", requestOptions)
        .then((resp) => resp.json())
        .then((resp) => {
          console.log(resp.data);
          localStorage.setItem("id", resp.data._id);
          window.location.reload();
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mainLogin">
      <h1>Welcome to MyChat !!</h1>
      <br />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="inp"
        type="text"
        placeholder="Email"
      />{" "}
      <br /> <br />
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="inp"
        type="text"
        placeholder="Name"
      />{" "}
      <br />
      <button onClick={(e) => handleEnter(e)} className="btn">
        Enter
      </button>
    </div>
  );
}
